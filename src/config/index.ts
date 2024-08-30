import { removeTrailingSlash } from "../sdk/common";

const isDebugMode = process.env.PASBY_DEBUG_MODE === 'true';

// We need to use NEXT_PUBLIC for frontend vars
const PASBY_AUTH_API_PATH =
  removeTrailingSlash(process.env.NEXT_PUBLIC_PASBY_AUTH_API_PATH) ||
  removeTrailingSlash(process.env.PASBY_AUTH_API_PATH) ||
  '/api/eid';

const PASBY_CLIENT_SECRET = process.env.PASBY_CLIENT_SECRET;
const PASBY_CONSUMER_KEY = process.env.PASBY_CONSUMER_KEY;
const PASBY_CLIENT_ID = process.env.PASBY_CLIENT_ID;
const PASBY_CONSUMER = process.env.PASBY_CONSUMER;
const PASBY_POST_LOGOUT_REDIRECT = removeTrailingSlash(
  process.env.PASBY_POST_LOGOUT_REDIRECT
);
const PASBY_POST_LOGIN_FALLBACK = removeTrailingSlash(
  process.env.PASBY_POST_LOGIN_FALLBACK
);
const PASBY_HOST_URL = removeTrailingSlash(
  process.env.PASBY_HOST_URL
);

export const config = {
  isDebugMode,
  consumerKey: PASBY_CONSUMER_KEY,
  secret: PASBY_CLIENT_SECRET,
  clientID: PASBY_CLIENT_ID,
  consumer: PASBY_CONSUMER,
  host: PASBY_HOST_URL,
  postLogoutRedirectURL: PASBY_POST_LOGOUT_REDIRECT,
  postLoginFallbackURL: PASBY_POST_LOGIN_FALLBACK,
  codeChallengeMethod: 'S256',
  redirectRoutes: {
    callback: `${PASBY_AUTH_API_PATH}/callback`
  },
  issuerRoutes: {
    logout: '/logout',
    identify: '/identify',
    token: '/token',
  },
}