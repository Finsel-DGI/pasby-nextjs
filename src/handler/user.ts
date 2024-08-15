import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";
import { sdk } from "../utils";

export default async function handler(_req: NextRequest | NextApiRequest, _res: NextResponse | NextApiResponse) {
  const { clientID } = config;

  if (!clientID) {
    return new Response("The environment variable 'PASBY_CLIENT_ID' is required. Set it in your .env file", {
      status: 400,
    });
  }
  const user = await sdk().getUser();
  if (!user) {
    return new Response("No active user", {
      status: 400,
    });
  } else {
    return NextResponse.json({ user: user });
  }
}