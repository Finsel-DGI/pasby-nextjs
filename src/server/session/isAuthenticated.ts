import { keys } from "@finsel-dgi/pasby-react";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const isAuthenticated = async (cookie: ReadonlyRequestCookies): Promise<boolean> => {
  const access = cookie.get(keys.eid)?.value;
  if (access) return true;
  else return false;
}