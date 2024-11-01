import { HTTP_METHOD, requester, Request } from "@rebatlabs/ui-funs";
import paths from "../lib/paths";

export const api = async (path: string, method: HTTP_METHOD, options: Request): Promise<Record<string, unknown>> => {
  const response = await requester(paths.base + path, method, options);
  const { status, reason } = response;
  if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
  return response.data;
}