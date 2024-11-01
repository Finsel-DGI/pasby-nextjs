import { api } from "../../lib/client";
import paths from "../../lib/paths";
import config from "../config";
import { decrypt, encrypt } from "../crypt";
import { AuthenticationParams } from "../types";
import { parseInterface, pkceChallenge } from "@rebatlabs/ui-funs";
import { User } from "@finsel-dgi/pasby-react";

export namespace Flow {
  export async function login({ claims, payload, action, redirect_uri, pkceExp }: AuthenticationParams & {
    /**
     * Your app redirect url as whitelisted in console
     */
    redirect_uri: string;
    /**
     * Path to return user to after handshake incase you'd love to retain UI state
     */
    state?: string;
    /**
     * Provide a duration in minutes when the pkceVerifier will expire
     */
    pkceExp?: number;

    /**
     * Should we return to you a value or simply redirect the user to the oauth screen
     */
    redirect: boolean;
  }) {
    const challenge = await pkceChallenge();
    const res = await api(paths.endpoint.login, 'POST', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.apikey,
        'x-access-secret': config.secret,
      },
      body: {
        callback: redirect_uri,
        action: action,
        claims: claims,
        challenge: challenge.challenge,
        payload: payload
      },
    }) as { link: string, session: string };
    return {
      link: res.link,
      id: res.session,
      pkce: await encrypt(challenge.verifier, pkceExp)
    }
  }

  export async function tokenSwap({ flow, code, verifier }: {
    /**
     * The handshake query value received by the redirect from pasby authorization server
     */
    code: string;
    /**
     * This flow query value received by the redirect from pasby authorization sever 
     */
    flow: string;
    /**
     * PKCE state value used to validate client
     */
    verifier?: string;
  }) {
    if (!verifier) {
      throw new Error("You are not permitted to commit such authentication action.");
    } if (flow === 'cancelled') {
      throw new Error("Identification flow through pasby eIDs cancelled.");
    }
    const pkce = await decrypt(verifier);
    const res = await api(paths.endpoint.handshake, 'POST', {
      body: {
        verifier: pkce,
      },
      headers: {
        'Accept': 'application/json',
        'authorization': `Shake ${code}`,
      }
    }) as { exp: number, access: string, challenge: string }
    return {
      access: res.access,
      exp: res.exp,
      csrf: await encrypt(res.challenge),
    }
  }

  export async function eidResource({ challenge, accessCode }: {
    /**
     * The challenge code pasby returned to your app during handshake
     */
    challenge?: string;
    /**
     * Return the access code provided by on token swap (handshake)
     */
    accessCode?: string;
  }) {
    if (!challenge) {
      throw new Error("You need to pass a pkce challenge to get eID resource");
    } if (!accessCode) {
      throw new Error("There's no active eID session available");
    }
    const pkce = (await decrypt(challenge));
    const access = await decrypt(accessCode);
    const response = await api(paths.endpoint.resource, 'POST', {
      body: {
        challenge: pkce,
        app: config.appid
      },
      headers: {
        'Accept': 'application/json',
        'authorization': `Bearer ${access}`,
      }
    });
    return parseInterface(response) as User;
  }
}