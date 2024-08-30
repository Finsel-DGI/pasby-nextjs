import axios from "axios";
import { IResponseTemplate, BASE_PATH, status, replyType, DEFAULT_ERROR } from "./base";

export type HTTP_METHOD = 'POST' | 'GET';

export type Request = {
  body?: Record<string, unknown>,
  headers?: Record<string, unknown>,
}

/**
 * Represents an API request function that sends HTTP requests to a specified path.
 * @param path - The path to which the HTTP request will be sent.
 * @returns An object containing a request function.
 */
const api = (path: string) => ({
  /**
   * Sends an HTTP request to the specified path using the provided method and options.
   * @param method - The HTTP method to be used for the request (POST or GET).
   * @param options - An object containing optional request parameters like body and headers.
   * @returns A Promise that resolves to the response data or an error object.
   */
  request: async (method: HTTP_METHOD, param: Request): Promise<IResponseTemplate> => {
    try {
      const url = `${BASE_PATH}/api/${path}`;

      console.log(`API url -- ${url}`);

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
  },
});

export default api;