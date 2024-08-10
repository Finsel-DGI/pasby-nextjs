import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";
import { sdk } from "..";

export default async function handler(req: NextRequest | NextApiRequest, res: NextResponse | NextApiResponse) {
  const { clientID, consumerKey, consumer, postLogoutRedirectURL, postLoginFallbackURL } = config;

  if (!clientID) {
    return new Response("The environment variable 'PASBY_CLIENT_ID' is required. Set it in your .env file", {
      status: 400,
    });
  }  if (!consumerKey) {
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
  }if (!postLoginFallbackURL) {
    return new Response("The environment variable 'PASBY_POST_LOGIN_FALLBACK' is required. Set it in your .env file", {
      status: 400,
    });
  }

  let code: string, redirectState, status;

  if (req instanceof NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    code = searchParams.get('handshake') ?? '';
    redirectState = searchParams.get('state') ?? '';
    status = searchParams.get('flow') ?? '';
  } else {
    let { handshake, state, flow } = (req as NextApiRequest).query;
    code = (handshake as string | undefined) ?? '';
    status = (flow as string | undefined) ?? '';
    redirectState = (state as string | undefined) ?? '';
  }

  if (status !== 'confirmed') {
    return NextResponse.redirect(postLogoutRedirectURL);
  }

  try {
    const access_token = await sdk().handshake(code);
    sdk().setAccessToken(access_token);
    return NextResponse.redirect(postLoginFallbackURL);
  } catch (e) {
    return new Response(`${(e as Error).message}`, {
      status: 400
    });
  }
}

