import axios from "axios";
import { replyType, DEFAULT_ERROR, status, IResponseTemplate } from "./base";

type HTTP_METHOD = 'POST' | 'GET';
type Request = {
  body?: Record<string, unknown>,
  headers?: Record<string, unknown>,
}

class api {
  public static async request(url: string, method: HTTP_METHOD, param: Request): Promise<IResponseTemplate> {
    try {
      const axiosOptions = {
        headers: param.headers
          ? JSON.parse(JSON.stringify(param.headers))
          : { 'Accept': 'application/json' },
        ...(method === 'POST' && { data: param.body }),
      };
      const response = await axios.request<IResponseTemplate>({
        url,
        method,
        ...axiosOptions,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(`Axios error --- ${JSON.stringify(error.response.data)}`);
        const errorResponse: { status: string, type: string, reason: string, label: string } = error.response.data;
        return {
          status: errorResponse.status as status,
          reason: errorResponse.reason,
          type: errorResponse.type as replyType,
        };
      } else {
        return DEFAULT_ERROR;
      }
    }
  }
}

const callback = async (url: string, method: HTTP_METHOD, options: Request): Promise<Record<string, unknown>> => {
  const response = await api.request(url, method, options);
  const { status, reason } = response;
  if (status !== 'successful' || !response.data) { throw new Error(reason ?? 'Request was unsuccessful'); }
  console.log(`Response data --- ${JSON.stringify(response.data)}`);
  return response.data;
}

export { callback as api };