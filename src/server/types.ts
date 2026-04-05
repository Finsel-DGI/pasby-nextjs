import { strEnum } from "@rebatlabs/ui-funs";

/** Canonical list of Pasby identification claim keys (single source of truth). */
export const PASBY_IDENTIFICATION_CLAIMS = [
  "bio.birthplace",
  "bio.birthdate",
  "bio.gender",
  "bio.maritalstatus",
  "bio.birthnumber",
  "contact.email",
  "contact.emailVerified",
  "contact.phone",
  "contact.phoneVerified",
  "address.city",
  "address.postcode",
  "address.state",
  "address.country",
  "address.place",
  "address.formatted",
  "address.longitude",
  "address.latitude",
  "naming.family",
  "naming.given",
  "naming.title",
  "naming.name",
  "naming.middle",
  "naming.titlePrefix",
  "naming.titleSuffix",
  "naming.nickname",
  "nationality.nationalities",
  "nationality.pep",
  "nationality.primary",
  "nationality.residence",
  "nationality.watchListed",
  "idcards.passport",
  "financial.bvn",
  "financial.bvnBank",
  "financial.bvnLevel",
  "financial.bvnIAT",
] as const;

const Claims = strEnum([...PASBY_IDENTIFICATION_CLAIMS]);

export type claims = keyof typeof Claims;

const claimKeySet = new Set<string>(PASBY_IDENTIFICATION_CLAIMS);

/** Keep only strings that are valid Pasby identification claim keys. */
export function filterPasbyIdentificationClaims(
  input: readonly string[],
): claims[] {
  return input.filter((c): c is claims => claimKeySet.has(c));
}

export type AuthenticationParams = {
  claims?: Array<claims>;
  payload: string;
  action: actions;
};

type actions = keyof typeof identificationActionType;
const identificationActionType = {
  login: "login",
  signup: "signup",
  link: "link",
  confirm: "confirm",
} as const;

export type PasbyIdentificationAction = actions;

export const PASBY_IDENTIFICATION_ACTIONS: readonly PasbyIdentificationAction[] =
  ["login", "signup", "link", "confirm"];
