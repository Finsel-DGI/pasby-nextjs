import { NextRequest, NextResponse } from "next/server";
import { AuthenticationParams } from "../types";
import { Flow } from "./flow";
import { keys } from "@finsel-dgi/pasby-react";
import { expiresAt, unixTimestampToMaxAge } from "@rebatlabs/ui-funs";
import config from "../config";
import { encrypt } from "../crypt";

type CookieSetter = (key: string, value: string, options?: {
  expires?: number;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
  httpOnly?: boolean;
}) => void;

type CookieGetter = (key: string) => Promise<string | undefined>;

export default (
  option: AuthenticationParams,
  errorFallbackPath: string
) => async function handler(req: NextRequest, { params }: { params: { auth: string } }) {
  try {
    // Create response object for cookie manipulation
    const response = new NextResponse();

    // Cookie setter implementation for Next.js 15
    const cookieSetter: CookieSetter = (key, value, options = {}) => {
      const { expires, maxAge, ...restOptions } = options;
      const cookieOptions = {
        ...restOptions,
        secure: true,
        sameSite: 'lax' as const,
        path: '/',
        ...(expires && { expires: new Date(expires * 1000) }),
        ...(maxAge && { maxAge }),
      };
      response.cookies.set(key, value, cookieOptions);
    };

    // Cookie getter implementation
    const cookieGetter: CookieGetter = async (key) => {
      return req.cookies.get(key)?.value;
    };

    switch (params.auth) {
      case 'login':
        return await login(req, option, cookieSetter, response);
      case 'handshake':
        return await handshake(req, cookieSetter, cookieGetter, response);
      case 'logout':
        return await logout(req, cookieSetter, response);
      default:
        return NextResponse.json({ error: 'Method request not accepted' }, {
          status: 400
        });
    }
  } catch (error) {
    const searchParams = req.nextUrl.searchParams;
    const redirect = (searchParams.get('redirect'));
    const message = (error as Error).message;
    console.error(`pasby eid error at route -- here the message: ${message}`);

    if (redirect === "true" || redirect === null || redirect === undefined) {
      return NextResponse.redirect(req.nextUrl.origin + errorFallbackPath + "?eidreject=" + encodeURIComponent(message));
    } else {
      return NextResponse.json({
        provider: "pasby authentication",
        error: message
      });
    }
  }
}

async function logout(req: NextRequest, cookieSetter: CookieSetter, response: NextResponse) {
  cookieSetter(keys.eid, '', { maxAge: 0 });
  cookieSetter(keys.csrf, '', { maxAge: 0 });
  cookieSetter(keys.pkce, '', { maxAge: 0 });
  response.headers.set('Location', req.nextUrl.origin + config.logoutReturnPath);
  return new NextResponse(null, {
    status: 302,
    headers: response.headers
  });
}

async function login(req: NextRequest, options: AuthenticationParams, cookieSetter: CookieSetter, response: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const state = searchParams.get('state');
  const redirect = (searchParams.get('redirect') ?? '') === "true";
  const res = await Flow.login({
    claims: options.claims ?? [],
    action: options.action,
    payload: options.payload,
    redirect: redirect,
    redirect_uri: req.nextUrl.origin + '/api/eid/handshake',
    state: state,
  });

  await setChallengeCookie(cookieSetter, {
    value: res.pkce
  });

  if (state) await setRedirectState(cookieSetter, {
    value: state
  });

  if (redirect) {
    response.headers.set('Location', res.link);
    return new NextResponse(null, {
      status: 302,
      headers: response.headers
    });
  } else {
    return NextResponse.json({ url: res.link }, {
      headers: response.headers
    });
  }
}

async function handshake(req: NextRequest, cookieSetter: CookieSetter, cookieGetter: CookieGetter, response: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('handshake') ?? '';
  const flow = searchParams.get('flow') ?? '';
  const verifier = await cookieGetter(keys.pkce);
  const res = await Flow.tokenSwap({
    flow: flow,
    code: code,
    verifier: verifier,
  });

  const maxAge = unixTimestampToMaxAge(res.exp);
  cookieSetter("csrf", "mmywi_" + res.csrf, { maxAge });
  cookieSetter(keys.csrf, res.csrf, { maxAge });
  cookieSetter(keys.eid, await encrypt(res.access), { maxAge });

  const state = await cookieGetter(keys.state);
  response.headers.set('Location', `${req.nextUrl.origin}${state ? state : config.loginReturnPath}`);
  return new NextResponse(null, {
    status: 302,
    headers: response.headers
  });
}

export async function setChallengeCookie(cookieSetter: CookieSetter, { value, expires, key }: {
  value: string, expires?: number, key?: string
}) {
  const exp = expires ?? expiresAt(10, 'm');
  cookieSetter(key ?? keys.pkce, value, { maxAge: unixTimestampToMaxAge(exp) });
}

export async function setRedirectState(cookieSetter: CookieSetter, { value }: {
  value: string
}) {
  const exp = expiresAt(10, 'm');
  cookieSetter(keys.state, value, { maxAge: unixTimestampToMaxAge(exp) });
}