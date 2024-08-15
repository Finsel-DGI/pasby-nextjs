import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import login from "./login";
import logout from "./logout";
import user from "./user";
import callback from "./callback";
import { AuthOptions } from "../options";

export default (options?: AuthOptions) =>
  function handler(request: NextRequest | NextApiRequest, response: NextResponse | NextApiResponse) {
    if (!request.url) {
      return new Response("No url", {
        status: 404
      });
    }
    const url = new URL(request.url);
    const auth = url.pathname.replace('/', '').split('/')[2];
    switch (auth) {
      case "login":
        return login(request, response, options);
      case "logout":
        return logout(request, response);
      case "callback":
        return callback(request, response);
      case "user":
        return user(request, response);
      default:
        return new Response("", {
          status: 404
        });
    }
  };