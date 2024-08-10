import axios from "axios";
import { cookies } from 'next/headers';
import { config } from "./config";
import { AuthOptions, IResponseTemplate, replyType, status } from "./lib/types";
import { BASE_PATH, DEFAULT_ERROR } from "./lib/base";
import pkceChallenge from "pkce-challenge";


const SESSION_PREFIX = 'pni';
const CHALLENGE_KEY = 'code-verifier';


/**
 * Represents an API request function that sends HTTP requests to a specified path.
 * @param path - The path to which the HTTP request will be sent.
 * @returns An object containing a request function.
 */
const api = (path: string) => ({
  /**
   * Sends an HTTP request to the specified path using the provided method and options.
   * @param method - The HTTP method to be used for the request (POST or GET).
   * @param options - An object containing optional request parameters like body and headers.
   * @returns A Promise that resolves to the response data or an error object.
   */
  request: async (method: 'POST' | 'GET',
    options: {
      body?: Record<string, unknown>,
      headers?: Record<string, unknown>,
    }): Promise<IResponseTemplate> => {
    try {
      const url = `${BASE_PATH}${path}`;

      const axiosOptions = {
        headers: options.headers
          ? JSON.parse(JSON.stringify(options.headers))
          : { 'Accept': 'application/json' },
        ...(method === 'POST' && { data: options.body }),
      };

      const response = await axios.request<IResponseTemplate>({
        url,
        method,
        ...axiosOptions,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorResponse: { status: string, type: string, reason: string, label: string } = error.response.data;
        return {
          status: errorResponse.status as status,
          reason: errorResponse.reason,
          type: errorResponse.type as replyType,
        };
      } else {
        return DEFAULT_ERROR;
      }
    }
  },
});

/**
 * SDK object containing methods for authentication and token management.
 */
const sdk = () => ({

  /**
   * Retrieves the authentication URL for initiating the authentication flow.
   * @param options - Optional parameters for customizing the authentication request.
   * @returns A Promise that resolves to the authentication URL.
   */
  getAuthUrl: async (options?: AuthOptions): Promise<string> => {
    const { consumerKey, secret, host, redirectRoutes } = config;
    const challenge = await pkceChallenge();

    const response = await api('/oidc/kipindi').request('POST', {
      body: {
        key: consumerKey,
        secret: secret,
        callback: `${host}${redirectRoutes.callback}`,
        action: options?.action ?? 'login',
        claims: options?.claims ?? [],
        challenge: challenge.code_challenge,
        payload: options?.payload ?? ''
      }
    });

    if (response.status === 'successful' && response.data && response.data.link) {
      sessionStorage.setItem(CHALLENGE_KEY, challenge.code_verifier);
      return `${response.data.link as string}${options?.redirectState ? `state=${options?.redirectState}` : ''}`;
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
    const { secret } = config;
    const codeVerifier = sessionStorage.getItem(CHALLENGE_KEY);

    const response = await api('/oidc/kupeana').request('POST', {
      body: {
        secret: secret,
        challenge: codeVerifier,
      },
      headers: {
        'Accept': 'application/json',
        'authorization': `Shake ${code}`,
      }
    });

    if (response.status === 'successful' && response.data && response.data.access_token) {
      return response.data.access_token as string;
    } else {
      throw new Error(response.reason, {
        cause: response
      });
    }
  },

  /**
   * Retrieves the access token from the request headers.
   * @returns The access token extracted from the request headers.
   */
  getAccessToken: (): string | undefined => {
    return cookies().get(SESSION_PREFIX)?.value;
  },

  /**
   * Sets the access token in the response headers as a cookie.
   * @param token - The access token to be set as a cookie.
   */
  setAccessToken: (token: string) => {
    cookies().set(SESSION_PREFIX, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
  },

  /**
   * Clears the access token cookie from the response headers.
   */
  clearAccessTokenCookie: () => {
    cookies().set(SESSION_PREFIX, '', {
      httpOnly: true,
      maxAge: 0,
    });
  }

});

export default sdk;