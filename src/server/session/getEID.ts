import { keys, User } from "@finsel-dgi/pasby-react";
import { Flow } from "../auth/flow";
import type { PasbyRuntimeConfig } from "../runtime-config";
import { pasbyConfigFromEnv } from "../runtime-config";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

/**
 * Load Pasby eID user from cookies. Pass `pasby` when using per-tenant `SECRET_GEN` / app id (hub turnkey).
 */
export const getEID = async (
  cookie: ReadonlyRequestCookies,
  pasby?: PasbyRuntimeConfig,
): Promise<User | undefined> => {
  const access = cookie.get(keys.eid)?.value;
  if (!access) return;
  const challenge = cookie.get(keys.csrf)?.value;
  const accessCode = cookie.get(keys.eid)?.value;
  const cfg = pasby ?? pasbyConfigFromEnv();
  try {
    return await Flow.eidResource(
      {
        challenge,
        accessCode,
      },
      cfg,
    );
  } catch (error) {
    console.error(`EID resource error: ${error}`);
    return;
  }
};
