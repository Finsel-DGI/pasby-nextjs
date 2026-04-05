/**
 * Pasby credentials and cookie-encryption key for one tenant or deployment.
 * Prefer passing this explicitly from Infisical (hub) instead of relying on `process.env`.
 */
export type PasbyRuntimeConfig = {
  secret: string;
  apikey: string;
  appid: string;
  /** Symmetric secret for JWE wrapping PKCE verifier and access tokens in cookies. */
  gen: string;
  loginReturnPath: string;
  logoutReturnPath: string;
};

/** Cookie name used to remember which tenant started Pasby login (hub multi-tenant). */
export const PASBY_TENANT_COOKIE = "pasby_tenant";

export function pasbyConfigFromEnv(): PasbyRuntimeConfig {
  return {
    secret: process.env.PASBY_CLIENT_SECRET ?? "",
    apikey: process.env.PASBY_CONSUMER_KEY ?? "",
    appid: process.env.PASBY_CLIENT_ID ?? "",
    gen: process.env.SECRET_GEN ?? "",
    loginReturnPath: process.env.PASBY_LOGIN_REDIRECT ?? "",
    logoutReturnPath: process.env.PASBY_LOGOUT_REDIRECT ?? "/",
  };
}
