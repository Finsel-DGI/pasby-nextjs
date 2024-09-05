import { config } from "../config";
import { api } from "../sdk/api";
import { AuthenticationParams } from "../sdk/auth.types";
import { pkceChallenge } from "../utils/pkce";
import { envMissing } from "../sdk/strings";
import { LOGIN_PATH } from "../utils/paths";

export async function loginLink(options: AuthenticationParams) {
  const { consumerKey, secret, redirectUri } = config;
  if (!secret) {
    throw new Error(envMissing("PASBY_CLIENT_SECRET"));
  } if (!redirectUri) {
    throw new Error(envMissing("PASBY_REDIRECT_URI"));
  }
  const challenge = await pkceChallenge();
  const response = await api(LOGIN_PATH, 'POST', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': consumerKey,
      'x-access-secret': secret,
    },
    body: {
      callback: `${redirectUri}`,
      action: options.action,
      claims: options.claims ?? [],
      challenge: challenge.challenge,
      payload: options.payload
    },
  }) as { link?: string };
  const { link } = response;
  if (!link) throw new Error("Communication misconfigured");
  return {
    url: link,
    pkce_verifier: challenge.verifier,
  }
}