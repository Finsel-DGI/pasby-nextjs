import flowClient from "./handle";
import { config } from "../config";
import { envMissing } from "../sdk/strings";
import { NextRequest, NextResponse } from "next/server";
import { AuthenticationParams } from "../sdk/auth.types";

export async function loginWithPasby(_req: NextRequest, options: AuthenticationParams) {
  return await flowClient().begin(options);
}

export async function tokenSwap(_req: NextRequest, params: URLSearchParams) {
  const { clientID, consumerKey, consumer, postLoginFallbackURL, host } = config;

  if (!clientID) throw new Error(envMissing("PASBY_CLIENT_ID"));
  if (!consumerKey) throw new Error(envMissing("PASBY_CONSUMER_KEY"));
  if (!consumer) throw new Error(envMissing("PASBY_CONSUMER"));
  if (!postLoginFallbackURL) throw new Error(envMissing("PASBY_POST_LOGIN_FALLBACK"));
  if (!host) throw new Error(envMissing("PASBY_HOST_URL"));

  const code = params.get('handshake') ?? '';
  const confirmed = (params.get('flow') ?? '') === 'confirmed';

  if (!confirmed) return NextResponse.redirect(host);

  // Handle the callback and token exchange
  await flowClient().callback(code);

  // Redirect to the post-login fallback URL after successful token swap
  return NextResponse.redirect(postLoginFallbackURL);
}
