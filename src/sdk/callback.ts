import { setCookie } from 'cookies-next';
import { HANDSHAKE_PATH } from '../utils/paths';
import { SESSION_KEY } from '../utils/keys';
import { unixTimestampToMaxAge } from '../utils/commons';

const callback = async (verifier: string, clientId: string) => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('handshake');
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