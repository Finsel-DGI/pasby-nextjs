import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";
import { sdk } from "../utils";

export default async function handler(req: NextRequest | NextApiRequest, _res: NextResponse | NextApiResponse) {
  if (!req.url) {
    return new Response("No url", {
      status: 404
    });
  }
  const { clientID, consumerKey, consumer, postLogoutRedirectURL, postLoginFallbackURL, host } = config;

  if (!clientID) {
    return new Response("The environment variable 'PASBY_CLIENT_ID' is required. Set it in your .env file", {
      status: 400,
    });
  } if (!consumerKey) {
    return new Response("The environment variable 'PASBY_CONSUMER_KEY' is required. Set it in your .env file", {
      status: 400,
    });
  } if (!consumer) {
    return new Response("The environment variable 'PASBY_CONSUMER' is required. Set it in your .env file", {
      status: 400,
    });
  } if (!postLogoutRedirectURL) {
    return new Response("The environment variable 'PASBY_POST_LOGOUT_REDIRECT' is required. Set it in your .env file", {
      status: 400,
    });
  } if (!postLoginFallbackURL) {
    return new Response("The environment variable 'PASBY_POST_LOGIN_FALLBACK' is required. Set it in your .env file", {
      status: 400,
    });
  } if (!host) {
    return new Response("The environment variable 'PASBY_POST_LOGIN_FALLBACK' is required. Set it in your .env file", {
      status: 400,
    });
  }

  let code: string, redirectState, status;

  const url = new URL(req.url);

  code = url.searchParams.get('handshake') ?? '';
  redirectState = url.searchParams.get('state') ?? '';
  status = url.searchParams.get('flow') ?? '';

  if (status !== 'confirmed') {
    return NextResponse.redirect(postLogoutRedirectURL);
  }

  try {
    const access_token = await sdk().handshake(code);
    sdk().setAccessToken(access_token);
    return NextResponse.redirect(postLoginFallbackURL);
  } catch (e) {
    console.log(`Callback error -- ${e}`);
    return new Response(`${(e as Error).message}`, {
      status: 400
    });
    // return NextResponse.redirect(`${host}?error=${btoa((e as Error).message)}`);
  }
}
