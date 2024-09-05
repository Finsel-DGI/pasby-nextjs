/* eslint-disable */

/**
 * remove trailing slash from string
 */
export const removeTrailingSlash = function (url: string | undefined) {
  if (url === undefined || url === null) return undefined;

  return url.replace(/\/$/, "");
}

export function parseInterface(data: any) {
  return JSON.parse(JSON.stringify(data));
}

/**
 * custom delay function
 * @param ms time
 * @returns {Promise<void>}
 */
export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function unixTimestampToMaxAge(expirationUnixTimestamp: number) {
  const currentUnixTimestamp = Math.floor(Date.now() / 1000);
  const maxAge = expirationUnixTimestamp - currentUnixTimestamp;
  return maxAge > 0 ? maxAge : 0;
}