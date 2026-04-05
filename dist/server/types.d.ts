/** Canonical list of Pasby identification claim keys (single source of truth). */
export declare const PASBY_IDENTIFICATION_CLAIMS: readonly ["bio.birthplace", "bio.birthdate", "bio.gender", "bio.maritalstatus", "bio.birthnumber", "contact.email", "contact.emailVerified", "contact.phone", "contact.phoneVerified", "address.city", "address.postcode", "address.state", "address.country", "address.place", "address.formatted", "address.longitude", "address.latitude", "naming.family", "naming.given", "naming.title", "naming.name", "naming.middle", "naming.titlePrefix", "naming.titleSuffix", "naming.nickname", "nationality.nationalities", "nationality.pep", "nationality.primary", "nationality.residence", "nationality.watchListed", "idcards.passport", "financial.bvn", "financial.bvnBank", "financial.bvnLevel", "financial.bvnIAT"];
declare const Claims: {
    "bio.birthplace": "bio.birthplace";
    "bio.birthdate": "bio.birthdate";
    "bio.gender": "bio.gender";
    "bio.maritalstatus": "bio.maritalstatus";
    "bio.birthnumber": "bio.birthnumber";
    "contact.email": "contact.email";
    "contact.emailVerified": "contact.emailVerified";
    "contact.phone": "contact.phone";
    "contact.phoneVerified": "contact.phoneVerified";
    "address.city": "address.city";
    "address.postcode": "address.postcode";
    "address.state": "address.state";
    "address.country": "address.country";
    "address.place": "address.place";
    "address.formatted": "address.formatted";
    "address.longitude": "address.longitude";
    "address.latitude": "address.latitude";
    "naming.family": "naming.family";
    "naming.given": "naming.given";
    "naming.title": "naming.title";
    "naming.name": "naming.name";
    "naming.middle": "naming.middle";
    "naming.titlePrefix": "naming.titlePrefix";
    "naming.titleSuffix": "naming.titleSuffix";
    "naming.nickname": "naming.nickname";
    "nationality.nationalities": "nationality.nationalities";
    "nationality.pep": "nationality.pep";
    "nationality.primary": "nationality.primary";
    "nationality.residence": "nationality.residence";
    "nationality.watchListed": "nationality.watchListed";
    "idcards.passport": "idcards.passport";
    "financial.bvn": "financial.bvn";
    "financial.bvnBank": "financial.bvnBank";
    "financial.bvnLevel": "financial.bvnLevel";
    "financial.bvnIAT": "financial.bvnIAT";
};
export type claims = keyof typeof Claims;
/** Keep only strings that are valid Pasby identification claim keys. */
export declare function filterPasbyIdentificationClaims(input: readonly string[]): claims[];
export type AuthenticationParams = {
    claims?: Array<claims>;
    payload: string;
    action: actions;
};
type actions = keyof typeof identificationActionType;
declare const identificationActionType: {
    readonly login: "login";
    readonly signup: "signup";
    readonly link: "link";
    readonly confirm: "confirm";
};
export type PasbyIdentificationAction = actions;
export declare const PASBY_IDENTIFICATION_ACTIONS: readonly PasbyIdentificationAction[];
export {};
