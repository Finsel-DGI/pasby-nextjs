import { keys, User } from "@finsel-dgi/pasby-react";
import { Flow } from "../auth/flow";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const getEID = async (cookie: ReadonlyRequestCookies): Promise<User | undefined> => {
  const access = cookie.get(keys.eid)?.value;
  if (!access) return;
  const challenge = cookie.get(keys.csrf)?.value;
  const accessCode = cookie.get(keys.eid)?.value;
  try {
    const res = await Flow.eidResource({
      challenge,
      accessCode
    });
    return res;
  } catch (error) {
    console.error(`EID resource error: ${error}`); // use pasby error logger
    return;
  }
}