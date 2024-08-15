import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setCookie, deleteCookie } from 'cookies-next';

export const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Logic for redirecting to Pasby OAuth2 interface
  const response = await axios.post('https://oauthn.web.app/api/v1/oidc/kipindi', {
    pkce: req.body.pkce,
  });
  const { link } = response.data.data;
  res.redirect(link);
};

export const logoutHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Clear cookies or token and redirect to logout page
  deleteCookie('access_token', { req, res });
  deleteCookie('pkce_challenge', { req, res });
  res.redirect('/login');
};

export const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { handshake, flow } = req.query;

  if (flow !== 'confirmed') {
    return res.status(400).json({ error: 'Authentication failed' });
  }

  const response = await axios.post(
    'https://oauthn.web.app/api/v1/oidc/kupeanai',
    { verifier: req.body.verifier },
    { headers: { authorization: `Shake ${handshake}` } }
  );

  const { access, challenge } = response.data.data;

  // Set cookies for access token and PKCE challenge
  setCookie('access_token', access, { req, res, httpOnly: true, secure: true });
  setCookie('pkce_challenge', challenge, { req, res, httpOnly: true, secure: true });

  res.redirect('/dashboard');
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
