import { cookies } from 'next/headers';
import { config } from "../config";
import { AuthOptions } from "../options";
import { pkceChallenge } from "./pkce";
import api, { csrf } from "../lib/api-client";
import { NationalFactory } from "../lib/national";
import { parseInterface } from "../lib/commons";


const SESSION_KEY = 'pni';
const CHALLENGE_KEY = 'code-verifier';
const CSRF_KEY = 'pcsrf-token';

async function setKey(key: string, value: string) {
  cookies().set(key, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });
}

function getKey(key: string): string | undefined {
  return cookies().get(key)?.value;
}

/**
 * SDK object containing methods for authentication and token management.
 */
const sdk = () => ({

  /**
   * Retrieves the authentication URL for initiating the authentication flow.
   * @param options - Optional parameters for customizing the authentication request.
   * @returns A Promise that resolves to the authentication URL.
   */
  getAuthUrl: async (options?: AuthOptions, redirectState?: string,): Promise<string> => {
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

    if (response.status === 'successful' && response.data && response.data.link) {
      setKey(CHALLENGE_KEY, challenge.verifier);
      return `${response.data.link as string}${redirectState ? `state=${redirectState}` : ''}`;
    } else {
      throw new Error(response.reason, {
        cause: response
      });
    }
  },

  /**
   * Completes the authentication handshake by exchanging the authorization code for an access token.
   * @param code - The authorization code received after successful authentication.
   * @returns A Promise that resolves to the access token.
   */
  handshake: async (code: string): Promise<string> => {
    const { secret, consumerKey } = config;
    const codeVerifier = getKey(CHALLENGE_KEY);
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

    if (response.status === 'successful' && response.data && response.data.access) {
      setKey(CHALLENGE_KEY, response.data.challenge as string);
      return response.data.access as string;
    } else {
      throw new Error(response.reason, {
        cause: response
      });
    }
  },

  getUser: async (): Promise<NationalFactory | undefined>  => {
    const token = getKey(SESSION_KEY);
    const challenge = getKey(CHALLENGE_KEY);
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
    if (response.status === 'successful' && response.data) {
      return parseInterface(response.data) as NationalFactory;
    } else {
      return;
    }
  },

  /**
   * Retrieves the access token from the request headers.
   * @returns The access token extracted from the request headers.
   */
  getAccessToken: (): string | undefined => {
    return cookies().get(SESSION_KEY)?.value;
  },

  /**
   * Sets the access token in the response headers as a cookie.
   * @param token - The access token to be set as a cookie.
   */
  setAccessToken: (token: string) => {
    cookies().set(SESSION_KEY, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
  },

  /**
   * Clears the access token cookie from the response headers.
   */
  clearAccessTokenCookie: () => {
    cookies().set(SESSION_KEY, '', {
      httpOnly: true,
      maxAge: 0,
    });
  }

});

export default sdk;