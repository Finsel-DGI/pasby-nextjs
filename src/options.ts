import { claims, identificationActionType } from "./lib/types";

export type AuthOptions = {
  claims?: Array<claims>,
  payload: string,
  action: identificationActionType,
}