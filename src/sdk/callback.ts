import { getCookie, setCookie } from 'cookies-next';
import { HANDSHAKE_PATH } from '../utils/paths';
import { SESSION_KEY } from '../utils/keys';
import { unixTimestampToMaxAge } from '../utils/commons';

const callback = async (pkceCookieKey: string, clientId: string) => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('handshake');
  const status = params.get('flow');
  if (status !== 'confirmed') {
    throw new Error("Authentication with pasby eID failed");
  }
  const verifier = getCookie(pkceCookieKey);
  if (!verifier) {
    throw new Error("No code verifier found for PKCE");
  }
  if (!code) return undefined;
  const response = await fetch(HANDSHAKE_PATH, {
    method: 'POST',
    headers: {
      'authorization': `Shake ${code}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      verifier,
    }),
  });
  const data = await response.json();
  if (!data.data) return;
  setCookie(SESSION_KEY, data.data.access, { maxAge: unixTimestampToMaxAge(data.data.exp as number), secure: true });
}

export default callback;