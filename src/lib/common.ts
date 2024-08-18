

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'


/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
  return removeTrailingSlash(url.pathname) + url.search + url.hash
}

/**
 * remove trailing slash from string
 */
export const removeTrailingSlash = function (url: string | undefined) {
  if (url === undefined || url === null) return undefined;

  return url.replace(/\/$/, "");
}

export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/* eslint-disable */
export function parseInterface(data: any) {
  return JSON.parse(JSON.stringify(data));
}

/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
export function generateRandomAlphaNumeric(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


export function isBrowser() {
  return typeof window !== "undefined"
}

export function unixTimestampToMaxAge(expirationUnixTimestamp: number) {
  const currentUnixTimestamp = Math.floor(Date.now() / 1000);
  const maxAge = expirationUnixTimestamp - currentUnixTimestamp;
  return maxAge > 0 ? maxAge : 0; // Ensure max-age is not negative
}