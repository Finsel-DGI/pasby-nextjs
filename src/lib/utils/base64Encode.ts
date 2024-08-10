// Base64-urlencodes the input string
export function base64UrlEncode(str: string) {
  // Convert the string to an ArrayBuffer
  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(str);

  // Convert the ArrayBuffer to string using Uint8 array to convert to what btoa accepts.
  // btoa accepts chars only within ascii 0-255 and base64 encodes them.
  // Then convert the base64 encoded to base64url encoded
  //   (replace + with -, replace / with _, trim trailing =)
  return btoa(String.fromCharCode.apply(null, Array.from(uint8Array)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}