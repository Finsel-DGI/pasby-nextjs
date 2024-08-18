import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setCookie, deleteCookie } from 'cookies-next';
import { AuthenticationParams } from '../types';
import FlowClient from '../client';
import { CHALLENGE_KEY, SESSION_KEY } from '../lib/base';
import { unixTimestampToMaxAge } from '../lib/common';
import { config } from '../config';

export const loginHandler = async (_req: NextApiRequest, res: NextApiResponse, options?: AuthenticationParams) => {
  // Logic for redirecting to Pasby OAuth2 interface
  try {
    const link = await FlowClient.login(options);
    res.redirect(link);
  } catch (e) {
    res.status(400).send({error: (e as Error).message});
  }
};

export const logoutHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { postLogoutRedirectURL } = config;
  if (!postLogoutRedirectURL) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_POST_LOGOUT_REDIRECT' is required. Set it in your .env file" });
  }
  // Clear cookies or token and redirect to logout page
  deleteCookie(SESSION_KEY, { req, res });
  deleteCookie(CHALLENGE_KEY, { req, res });
  res.redirect(postLogoutRedirectURL);
};

export const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { clientID, consumerKey, consumer, postLogoutRedirectURL, postLoginFallbackURL, host } = config;

  if (!clientID) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_CLIENT_ID' is required. Set it in your .env file" });
  } if (!consumerKey) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_CONSUMER_KEY' is required. Set it in your .env file" });
  } if (!consumer) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_CONSUMER' is required. Set it in your .env file" });
  } if (!postLogoutRedirectURL) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_POST_LOGOUT_REDIRECT' is required. Set it in your .env file" });
  } if (!postLoginFallbackURL) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_POST_LOGIN_FALLBACK' is required. Set it in your .env file" });
  } if (!host) {
    return res.status(400).
      send({ error: "The environment variable 'PASBY_POST_LOGIN_FALLBACK' is required. Set it in your .env file" });
  }

  const { handshake, flow } = req.query;

  if (flow !== 'confirmed') {
    return res.status(400).json({ error: 'Authentication failed' });
  }if (!handshake) {
    return res.status(400).json({ error: 'Invalid pasby callback url' });
  }

  const response = await FlowClient.callback(handshake as string);

  const { access, challenge, exp } = response;

  // Set cookies for access token and PKCE challenge
  setCookie(SESSION_KEY, access, { req, res, httpOnly: true, secure: true, maxAge: unixTimestampToMaxAge(exp) });
  setCookie(CHALLENGE_KEY, challenge, { req, res, httpOnly: true, secure: true });

  res.redirect(postLoginFallbackURL);
};

export const resourceHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = req.cookies['access_token'];
  const pkceChallenge = req.cookies['pkce_challenge'];

  const response = await axios.post(
    'https://oauthn.web.app/api/v1/oidc/resource',
    {
      app: 'your-app-id',
      challenge: pkceChallenge,
    },
    { headers: { authorization: `Bearer ${accessToken}` } }
  );

  res.status(200).json(response.data);
};
