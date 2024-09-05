function generateCodeVerifier() {
  const array = new Uint32Array(56 / 2);
  crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

async function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  
  const digestArray = Array.from(new Uint8Array(digest));
  return btoa(String.fromCharCode(...digestArray))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function pkceChallenge(): Promise<{ verifier: string, challenge: string }> {
  const verifier = generateCodeVerifier();
  const code = await generateCodeChallenge(verifier);

  return {
    verifier: verifier,
    challenge: code
  }
}