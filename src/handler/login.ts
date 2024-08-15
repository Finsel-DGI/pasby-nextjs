import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";
import { sdk } from "../utils";
import { AuthOptions } from "../options";

export default async function handler(_req: NextRequest | NextApiRequest, _res: NextResponse | NextApiResponse, options?: AuthOptions) {

  const { clientID, consumerKey, consumer, postLogoutRedirectURL, postLoginFallbackURL } = config;

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
  }

  console.log('Bitch got here');

  try {
    const authUrl = await sdk().getAuthUrl(options);
    console.log(`Auth url --- ${authUrl}`);
    return NextResponse.redirect(authUrl);
  } catch (e) {
    console.error(`Error in ham street ${(e as Error).message}`);
    return new Response(`${(e as Error).message}`, {
      status: 400
    });
  }
}