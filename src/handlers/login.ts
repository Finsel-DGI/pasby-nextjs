import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { sdk } from "..";
import { config } from "../config";

export default async function handler(req: NextRequest | NextApiRequest, res: NextResponse | NextApiResponse) {

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

  try {
    const authUrl = await sdk().getAuthUrl();
    return NextResponse.redirect(authUrl);
  } catch (e) {
    return new Response(`${(e as Error).message}`, {
      status: 400
    });
  }
}