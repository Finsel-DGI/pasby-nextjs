import { parseInterface } from "@rebatlabs/ui-funs";
import { jwtVerify, SignJWT } from "jose";
import { pasbyConfigFromEnv } from "./runtime-config";

const ALG = "HS256";

function resolveGen(gen?: string): string {
  return gen ?? pasbyConfigFromEnv().gen;
}

export const encrypt = async (
  data: string,
  exp?: number,
  gen?: string,
): Promise<string> => {
  const key = resolveGen(gen);
  const payload = await new SignJWT({ sub: data })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(exp ?? "25 mins from now")
    .sign(new TextEncoder().encode(key));
  return payload;
};

export const decrypt = async (data: string, gen?: string): Promise<string> => {
  try {
    const key = resolveGen(gen);
    const payload = (
      await jwtVerify(data, new TextEncoder().encode(key), {
        algorithms: [ALG],
      })
    ).payload;
    return (parseInterface(payload) as { sub: string }).sub;
  } catch {
    return "";
  }
};
