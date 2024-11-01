import { parseInterface } from "@rebatlabs/ui-funs";
import { jwtVerify, SignJWT } from "jose";
import config from "./config";

const ALG = 'HS256';
const gen = config.gen;

export const encrypt = async (data: string, exp?: number): Promise<string> => {
  const payload = await new SignJWT({ sub: data })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(exp ?? '25 mins from now')
    .sign(new TextEncoder().encode(gen));
  return payload;
}

export const decrypt = async (data: string): Promise<string> => {
  try {
    const payload = (await jwtVerify(data, new TextEncoder().encode(gen),
      { algorithms: [ALG] })).payload;
    return (parseInterface(payload) as { sub: string }).sub;
  } catch (e) {
    return "";
  }
}