// src/api/resources.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

export const getUserResources = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Retrieve cookies
    const accessToken = getCookie('access_token', { req, res });
    const pkceChallenge = getCookie('pkce_challenge', { req, res });

    if (!accessToken || !pkceChallenge) {
      return res.status(401).json({ error: 'Unauthorized: Missing token or challenge.' });
    }

    // Make request to Pasby API to get user resources
    const response = await axios.post(
      'https://oauthn.web.app/api/v1/oidc/resource',
      {
        app: 'your-app-id',  // Replace with your actual app ID
        challenge: pkceChallenge,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Return the user data from the API response
    if (response.data.status === 'successful') {
      return res.status(200).json(response.data.data);
    } else {
      return res.status(400).json({ error: response.data.reason });
    }
  } catch (error) {
    console.error('Error fetching user resources:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
