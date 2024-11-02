import { NextRequest, NextResponse } from "next/server";
import { AuthenticationParams } from "../types";
import { Flow } from "./flow";
import { keys } from "@finsel-dgi/pasby-react";
import { expiresAt, unixTimestampToMaxAge } from "@rebatlabs/ui-funs";
import config from "../config";
import { encrypt } from "../crypt";

type setter = (key: string, value: string, exp?: number) => void;
type getter = (key: string) => Promise<string | undefined>;

export default (option: AuthenticationParams, 
  cookieSetter: setter, cookieGetter: getter
) =>
  async function handler(req: NextRequest, { params }: { params: { auth: string } }) {
    try {
      switch (params.auth) {
        case 'login':
          return await login(req, option, cookieSetter);
        case 'handshake':
          return await handshake(req, cookieSetter, cookieGetter);
        case 'logout':
          return await logout(req, cookieSetter);
        default:
          return NextResponse.json({ error: 'Method request not accepted' }, {
            status: 400
          });
      }
    } catch (error) {
      const message = (error as Error).message;
      console.error(`pasby eid error at route -- here the message: ${message}`); // make a pasby logger type here
      return NextResponse.json({
        provider: "pasby authentication",
        error: message
      });
    }
  }

async function logout(req: NextRequest, cookieSetter: setter) {
  cookieSetter(keys.eid, '', 0);
  cookieSetter(keys.csrf, '', 0);
  cookieSetter(keys.pkce, '', 0);
  return NextResponse.redirect(req.nextUrl.origin + config.logoutReturnPath);
}

async function login(req: NextRequest, options: AuthenticationParams, cookieSetter: setter) {
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
    return NextResponse.redirect(res.link);
  } else {
    return NextResponse.json({ url: res.link });
  }
}

async function handshake(req: NextRequest, cookieSetter: setter, cookieGetter: getter) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('handshake') ?? '';
  const flow = searchParams.get('flow') ?? '';
  const verifier = await cookieGetter(keys.pkce);
  const res = await Flow.tokenSwap({
    flow: flow,
    code: code,
    verifier: verifier,
  });
  console.log(`About to set challenge --- ${res.csrf}`);
  cookieSetter("csrf", "mmywi_"+res.csrf, unixTimestampToMaxAge(res.exp));
  cookieSetter(keys.csrf, res.csrf, unixTimestampToMaxAge(res.exp));
  cookieSetter(keys.eid, await encrypt(res.access), unixTimestampToMaxAge(res.exp));
  const state = await cookieGetter(keys.state);
  return NextResponse.redirect(`${req.nextUrl.origin}${state ? state :
    config.loginReturnPath}`);
}

export async function setChallengeCookie(cookieSetter: setter, { value, expires, key }: {
  value: string, expires?: number, key?: string
}) {
  const exp = expires ?? expiresAt(10, 'm');
  cookieSetter(key ?? keys.pkce, value, unixTimestampToMaxAge(exp));
}

export async function setRedirectState(cookieSetter: setter, { value }: {
  value: string
}) {
  const exp = expiresAt(10, 'm');
  cookieSetter(keys.state, value, unixTimestampToMaxAge(exp));
}