import { api } from "../../lib/client";
import paths from "../../lib/paths";
import { decrypt, encrypt } from "../crypt";
import type { PasbyRuntimeConfig } from "../runtime-config";
import { pasbyConfigFromEnv } from "../runtime-config";
import { AuthenticationParams } from "../types";
import { parseInterface, pkceChallenge } from "@rebatlabs/ui-funs";
import { User } from "@finsel-dgi/pasby-react";

function cfg(pasby?: PasbyRuntimeConfig): PasbyRuntimeConfig {
  return pasby ?? pasbyConfigFromEnv();
}

export namespace Flow {
  export async function login(
    {
      claims,
      payload,
      action,
      redirect_uri,
      pkceExp,
      redirect,
      state,
    }: AuthenticationParams & {
      redirect_uri: string;
      state?: string | null;
      pkceExp?: number;
      redirect: boolean;
    },
    pasby?: PasbyRuntimeConfig,
  ) {
    const c = cfg(pasby);
    const challenge = await pkceChallenge();
    const res = (await api(paths.endpoint.login, "POST", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": c.apikey,
        "x-access-secret": c.secret,
      },
      body: {
        callback: redirect_uri,
        action: action,
        claims: claims,
        challenge: challenge.challenge,
        payload: payload,
      },
    })) as { link: string; session: string };
    return {
      link: res.link,
      id: res.session,
      pkce: await encrypt(challenge.verifier, pkceExp, c.gen),
    };
  }

  export async function tokenSwap(
    {
      flow,
      code,
      verifier,
    }: {
      code: string;
      flow: string;
      verifier?: string;
    },
    pasby?: PasbyRuntimeConfig,
  ) {
    const c = cfg(pasby);
    if (!verifier) {
      throw new Error("You are not permitted to commit such authentication action.");
    }
    if (flow === "cancelled") {
      throw new Error("Identification flow through pasby eIDs cancelled.");
    }
    const pkce = await decrypt(verifier, c.gen);
    const res = (await api(paths.endpoint.handshake, "POST", {
      body: {
        verifier: pkce,
      },
      headers: {
        Accept: "application/json",
        authorization: `Shake ${code}`,
      },
    })) as { exp: number; access: string; challenge: string };
    return {
      access: res.access,
      exp: res.exp,
      csrf: await encrypt(res.challenge, undefined, c.gen),
    };
  }

  export async function eidResource(
    {
      challenge,
      accessCode,
    }: {
      challenge?: string;
      accessCode?: string;
    },
    pasby?: PasbyRuntimeConfig,
  ) {
    const c = cfg(pasby);
    if (!challenge) {
      throw new Error("You need to pass a pkce challenge to get eID resource");
    }
    if (!accessCode) {
      throw new Error("There's no active eID session available");
    }
    const pkce = await decrypt(challenge, c.gen);
    const access = await decrypt(accessCode, c.gen);
    const response = await api(paths.endpoint.resource, "POST", {
      body: {
        challenge: pkce,
        app: c.appid,
      },
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${access}`,
      },
    });
    return parseInterface(response) as User;
  }
}
