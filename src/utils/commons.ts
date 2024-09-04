export function unixTimestampToMaxAge(expirationUnixTimestamp: number) {
  const currentUnixTimestamp = Math.floor(Date.now() / 1000);
  const maxAge = expirationUnixTimestamp - currentUnixTimestamp;
  return maxAge > 0 ? maxAge : 0;
}