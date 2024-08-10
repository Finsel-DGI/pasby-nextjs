import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import login from "./login";
import logout from "./logout";

export default () =>
  function handler(req: NextRequest | NextApiRequest, res: NextResponse | NextApiResponse, { params }: { params: { auth: string } }) {
    switch (params.auth) {
      case "login":
        login(req, res);
      case "logout":
        logout(req, res);
      default:
        return new Response("", {
          status: 404
        });
    }
  };