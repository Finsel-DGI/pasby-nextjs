import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";
import { sdk } from "..";

export default async function handler(req: NextRequest | NextApiRequest, res: NextResponse | NextApiResponse) {
  const { postLogoutRedirectURL } = config;

  if (!postLogoutRedirectURL) {
    return new Response("The environment variable 'PASBY_POST_LOGOUT_REDIRECT' is required. Set it in your .env file", {
      status: 400,
    });
  }

  sdk().clearAccessTokenCookie();
  return NextResponse.redirect(postLogoutRedirectURL);
}