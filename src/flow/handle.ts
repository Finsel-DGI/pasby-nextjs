import { cookies } from "next/headers";
import { config } from "../config";
import api, { HTTP_METHOD, Request } from "../sdk/api-client";
import { CHALLENGE_KEY, SESSION_KEY } from "../sdk/base";
import { pkceChallenge } from "../sdk/pkce";
import { envMissing } from "../sdk/strings";
import { unixTimestampToMaxAge } from "../sdk/common";
import { AuthenticationParams } from "../sdk/auth.types";

const callback = async (path: string, method: HTTP_METHOD, options: Request): Promise<Record<string, unknown>> => {
  const response = await api(path).request(method, options);
  const { status, reason } = response;
  if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
  return response.data;
}

const flowClient = () => {
  return {
    async begin(options?: AuthenticationParams, redirectState?: string) {
      const { consumerKey, secret, host, redirectRoutes } = config;
      if (!secret) {
        throw new Error(envMissing("PASBY_CLIENT_SECRET"));
      }

      const challenge = await pkceChallenge();
      const { link } = await callback('v1/oidc/kipindi', 'POST', {
        body: {
          callback: `${host}${redirectRoutes.callback}`,
          action: options?.action ?? 'login',
          claims: options?.claims ?? [],
          challenge: challenge.challenge,
          payload: options?.payload ?? ''
        },
        headers: {
          'x-api-key': consumerKey,
          'x-access-secret': secret,
        }
      });
      cookies().set(CHALLENGE_KEY, challenge.verifier, { secure: true });
      return `${link as string}${redirectState ? `state=${redirectState}` : ''}`;
    },

    async callback(code: string): Promise<void> {
      const { secret, consumerKey } = config;
      if (!secret) {
        throw new Error(envMissing("PASBY_CLIENT_SECRET"));
      }
      if (!consumerKey) {
        throw new Error(envMissing("PASBY_CONSUMER_KEY"));
      }

      const codeVerifier = cookies().get(CHALLENGE_KEY)?.value;
      if (!codeVerifier) {
        throw new Error('Missing code verifier');
      }

      const { challenge, access, exp } = await callback('v1/oidc/kupeana', 'POST', {
        body: {
          verifier: codeVerifier,
        },
        headers: {
          'Accept': 'application/json',
          'authorization': `Shake ${code}`,
          'x-api-key': consumerKey,
          'x-access-secret': secret,
        }
      });
      cookies().set(SESSION_KEY, access as string, { maxAge: unixTimestampToMaxAge(exp as number), secure: true });
      cookies().set(CHALLENGE_KEY, challenge as string, { secure: true });
    }
  }
}

export default flowClient;
