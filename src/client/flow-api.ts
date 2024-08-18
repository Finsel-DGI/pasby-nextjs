import { CHALLENGE_KEY, SESSION_KEY } from "../lib/base"
import { AuthenticationParams, User } from "../types"
import { config } from "../config"
import { pkceChallenge } from "../lib/pkce"
import api from "../lib/api-client"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { parseInterface } from "../lib/common"

export const FlowAPI = function () {
  return {
    async getAuthUrl(options?: AuthenticationParams, redirectState?: string) {
      const { consumerKey, secret, host, redirectRoutes } = config;
      const challenge = await pkceChallenge();
      const response = await api('v1/oidc/kipindi').request('POST', {
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
      const { status, reason } = response;
      if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
      setCookie(CHALLENGE_KEY, challenge.verifier);
      const { link } = response.data;
      return `${link as string}${redirectState ? `state=${redirectState}` : ''}`;
    },

    async handshake(code: string) {
      const { secret, consumerKey } = config;
      const codeVerifier = getCookie(CHALLENGE_KEY);
      const response = await api('v1/oidc/kupeana').request('POST', {
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
      const { status, reason } = response;
      if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
      const { challenge, access, exp } = response.data;
      return { challenge: challenge as string, access: access as string, exp: exp as number}
    },

    async resource() {
      const token = getCookie(SESSION_KEY);
      const challenge = getCookie(CHALLENGE_KEY);
      if (!token) return;
      const { secret, consumerKey, clientID } = config;
      const response = await api('v1/oidc/resource').request('POST', {
        body: {
          challenge: challenge,
          app: clientID
        },
        headers: {
          'Accept': 'application/json',
          'authorization': `Bearer ${token}`,
          'x-api-key': consumerKey,
          'x-access-secret': secret,
        }
      });
      const { status, reason } = response;
      if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
      return parseInterface(response.data) as User;
    },

    async logout() {
      deleteCookie(SESSION_KEY);
      deleteCookie(CHALLENGE_KEY);
    }
  }
}