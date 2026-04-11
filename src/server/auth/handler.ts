import { NextResponse } from "next/server";
import type { AuthenticationParams } from "../types";
import { Flow } from "./flow";
import { keys } from "@finsel-dgi/pasby-react";
import { expiresAt, unixTimestampToMaxAge } from "@rebatlabs/ui-funs";
import { encrypt } from "../crypt";
import {
  PASBY_TENANT_COOKIE,
  pasbyConfigFromEnv,
  type PasbyRuntimeConfig,
} from "../runtime-config";

/**
 * Minimal `NextRequest` shape so the hub and SDK are not pinned to the same `next` install.
 */
export type PasbyHandlerRequest = {
  nextUrl: Pick<URL, "origin" | "searchParams">;
  cookies: {
    get(name: string): { value: string } | undefined;
  };
};

/** Per-tenant overrides for the Pasby login request (merged over `createPasbyHandler` defaults). */
export type PasbyLoginOverride = Partial<
  Pick<AuthenticationParams, "claims" | "action" | "payload">
>;

export type PasbyHandlerContext = {
  config: PasbyRuntimeConfig;
  /** When set at login, stored in httpOnly cookie for handshake/logout tenant resolution. */
  tenantId?: string;
  /**
   * Applied during the **login** phase only. When `claims` / `action` / `payload` are set here,
   * they override the static options passed to `createPasbyHandler` for that request.
   */
  login?: PasbyLoginOverride;
};

export type ResolvePasbyContext = (
  req: PasbyHandlerRequest,
  phase: "login" | "handshake" | "logout",
) => Promise<PasbyHandlerContext | null>;

function mergeLoginParams(
  defaults: AuthenticationParams,
  override?: PasbyLoginOverride,
): AuthenticationParams {
  return {
    claims:
      override?.claims !== undefined
        ? override.claims
        : (defaults.claims ?? []),
    action: override?.action ?? defaults.action,
    payload: override?.payload ?? defaults.payload,
  };
}

type CookieSetter = (
  key: string,
  value: string,
  options?: {
    expires?: number;
    maxAge?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "lax" | "strict" | "none";
    httpOnly?: boolean;
  },
) => void;

type CookieGetter = (key: string) => Promise<string | undefined>;

/**
 * Pasby post-login redirect path stored in the `state` cookie.
 * Next.js / fetch already decodes the query param once; do **not** decode again or
 * `%26` inside `redirect_url=...` becomes `&` and breaks the outer query string.
 */
function stateFromLoginQuery(raw: string | null): string | null {
  if (raw == null || raw === "") return null;
  return raw;
}

export function createPasbyHandler(
  option: AuthenticationParams,
  errorFallbackPath: string,
  resolveContext: ResolvePasbyContext,
) {
  return async function handler(
    req: PasbyHandlerRequest,
    { params }: { params: { auth: string } },
  ) {
    try {
      const response = new NextResponse();

      const cookieSetter: CookieSetter = (key, value, options = {}) => {
        const { expires, maxAge, ...restOptions } = options;
        const cookieOptions = {
          ...restOptions,
          secure: true,
          sameSite: "lax" as const,
          path: "/",
          ...(expires && { expires: new Date(expires * 1000) }),
          ...(maxAge !== undefined && { maxAge }),
        };
        response.cookies.set(key, value, cookieOptions);
      };

      const cookieGetter: CookieGetter = async (key) => {
        return req.cookies.get(key)?.value;
      };

      switch (params.auth) {
        case "login":
          return await login(
            req,
            option,
            cookieSetter,
            response,
            resolveContext,
          );
        case "handshake":
          return await handshake(
            req,
            cookieSetter,
            cookieGetter,
            response,
            resolveContext,
          );
        case "logout":
          return await logout(
            req,
            cookieSetter,
            response,
            resolveContext,
          );
        default:
          return NextResponse.json(
            { error: "Method request not accepted" },
            { status: 400 },
          );
      }
    } catch (error) {
      const searchParams = req.nextUrl.searchParams;
      const redirect = searchParams.get("redirect");
      const message = (error as Error).message;
      const phase = params.auth;
      if (process.env.NODE_ENV === "development") {
        console.error(`[pasby-next] eid/${phase} error: ${message}`, {
          origin: req.nextUrl.origin,
          searchKeys: Array.from(req.nextUrl.searchParams.keys()),
        });
      } else {
        console.error(`[pasby-next] eid/${phase} error: ${message}`);
      }

      if (redirect === "true" || redirect === null || redirect === undefined) {
        return NextResponse.redirect(
          req.nextUrl.origin +
            errorFallbackPath +
            "?eidreject=" +
            encodeURIComponent(message),
        );
      }
      return NextResponse.json({
        provider: "pasby authentication",
        error: message,
      });
    }
  };
}

/** Backward-compatible handler: reads Pasby credentials from `process.env` only. */
export default function legacyHandler(
  option: AuthenticationParams,
  errorFallbackPath: string,
) {
  return createPasbyHandler(option, errorFallbackPath, async () => ({
    config: pasbyConfigFromEnv(),
    tenantId: undefined,
  }));
}

async function logout(
  req: PasbyHandlerRequest,
  cookieSetter: CookieSetter,
  response: NextResponse,
  resolveContext: ResolvePasbyContext,
) {
  const ctx =
    (await resolveContext(req, "logout")) ?? {
      config: pasbyConfigFromEnv(),
    };

  cookieSetter(keys.eid, "", { maxAge: 0 });
  cookieSetter(keys.csrf, "", { maxAge: 0 });
  cookieSetter(keys.pkce, "", { maxAge: 0 });
  cookieSetter("csrf", "", { maxAge: 0 });
  cookieSetter(PASBY_TENANT_COOKIE, "", { maxAge: 0 });

  response.headers.set(
    "Location",
    req.nextUrl.origin + ctx.config.logoutReturnPath,
  );
  return new NextResponse(null, {
    status: 302,
    headers: response.headers,
  });
}

async function login(
  req: PasbyHandlerRequest,
  options: AuthenticationParams,
  cookieSetter: CookieSetter,
  response: NextResponse,
  resolveContext: ResolvePasbyContext,
) {
  const ctx = await resolveContext(req, "login");
  if (!ctx) {
    throw new Error(
      "Pasby login: resolveContext returned null — your createPasbyHandler resolver must return { config, tenantId? } for phase \"login\" (hub: see /api/eid route; often missing ?tenant= or tenant/Infisical load failed).",
    );
  }

  const searchParams = req.nextUrl.searchParams;
  const state = stateFromLoginQuery(searchParams.get("state"));
  const redirect = (searchParams.get("redirect") ?? "") === "true";

  const loginParams = mergeLoginParams(options, ctx.login);

  const res = await Flow.login(
    {
      claims: loginParams.claims ?? [],
      action: loginParams.action,
      payload: loginParams.payload,
      redirect,
      redirect_uri: req.nextUrl.origin + "/api/eid/handshake",
      state: state ?? undefined,
    },
    ctx.config,
  );

  const pkMaxAge = unixTimestampToMaxAge(expiresAt(10, "m"));

  await setChallengeCookie(cookieSetter, { value: res.pkce });

  if (state) {
    await setRedirectState(cookieSetter, { value: state });
  }

  if (ctx.tenantId) {
    cookieSetter(PASBY_TENANT_COOKIE, ctx.tenantId, {
      maxAge: pkMaxAge,
      httpOnly: true,
    });
  }

  if (redirect) {
    response.headers.set("Location", res.link);
    return new NextResponse(null, {
      status: 302,
      headers: response.headers,
    });
  }
  return NextResponse.json(
    { url: res.link },
    {
      headers: response.headers,
    },
  );
}

async function handshake(
  req: PasbyHandlerRequest,
  cookieSetter: CookieSetter,
  cookieGetter: CookieGetter,
  response: NextResponse,
  resolveContext: ResolvePasbyContext,
) {
  const searchParams = req.nextUrl.searchParams;
  const ctx = await resolveContext(req, "handshake");
  if (!ctx) {
    const hasTenantCookie = Boolean(
      req.cookies.get(PASBY_TENANT_COOKIE)?.value?.trim(),
    );
    if (process.env.NODE_ENV === "development") {
      const pkce = await cookieGetter(keys.pkce);
      console.error("[pasby-next/handshake] resolveContext returned null", {
        origin: req.nextUrl.origin,
        [`cookie_${PASBY_TENANT_COOKIE}`]: hasTenantCookie,
        hasPkceCookie: Boolean(pkce),
        flow: searchParams.get("flow") ?? "",
      });
    }
    throw new Error(
      `Pasby handshake: resolveContext returned null — usually the httpOnly tenant cookie (${PASBY_TENANT_COOKIE}) is missing, tenant secrets could not be reloaded, or Pasby config is incomplete. Same origin + fresh login within ~10m required. hasTenantCookie=${hasTenantCookie}`,
    );
  }

  const code = searchParams.get("handshake") ?? "";
  const flow = searchParams.get("flow") ?? "";
  const verifier = await cookieGetter(keys.pkce);

  const res = await Flow.tokenSwap(
    {
      flow,
      code,
      verifier,
    },
    ctx.config,
  );

  const maxAge = unixTimestampToMaxAge(res.exp);
  cookieSetter("csrf", "mmywi_" + res.csrf, { maxAge });
  cookieSetter(keys.csrf, res.csrf, { maxAge });
  cookieSetter(keys.eid, await encrypt(res.access, undefined, ctx.config.gen), {
    maxAge,
  });

  cookieSetter(PASBY_TENANT_COOKIE, "", { maxAge: 0 });

  const state = await cookieGetter(keys.state);
  const target = state
    ? state
    : ctx.config.loginReturnPath || "/";
  response.headers.set("Location", `${req.nextUrl.origin}${target}`);
  return new NextResponse(null, {
    status: 302,
    headers: response.headers,
  });
}

export async function setChallengeCookie(
  cookieSetter: CookieSetter,
  { value, expires, key }: { value: string; expires?: number; key?: string },
) {
  const exp = expires ?? expiresAt(10, "m");
  cookieSetter(key ?? keys.pkce, value, { maxAge: unixTimestampToMaxAge(exp) });
}

export async function setRedirectState(
  cookieSetter: CookieSetter,
  { value }: { value: string },
) {
  const exp = expiresAt(10, "m");
  cookieSetter(keys.state, value, { maxAge: unixTimestampToMaxAge(exp) });
}
