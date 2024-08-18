import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticationParams } from "../types";
import { callbackHandler, loginHandler, logoutHandler } from "./auth";

export default (options?: AuthenticationParams) =>
  function handler(request: NextApiRequest, response: NextApiResponse) {
    if (!request.url) {
      return new Response("No url", {
        status: 404
      });
    }
    const url = new URL(request.url);
    const auth = url.pathname.replace('/', '').split('/')[2];
    switch (auth) {
      case "login":
        return loginHandler(request, response, options);
      case "logout":
        return logoutHandler(request, response);
      case "callback":
        return callbackHandler(request, response);
      default:
        return response.status(400);
    }
  };