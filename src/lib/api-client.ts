import axios from "axios";
import { BASE_PATH, DEFAULT_ERROR } from "./base";
import { IResponseTemplate, replyType, status } from "./types";


export async function csrf(): Promise<string> {
  const response = await api('surfer').request('GET', {});
  if (response.data && response.data.csrfToken) {
    return response.data.csrfToken as string;
  }
  return '';
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
  request: async (method: 'POST' | 'GET',
    options: {
      body?: Record<string, unknown>,
      headers?: Record<string, unknown>,
    }): Promise<IResponseTemplate> => {
    try {
      const url = `${BASE_PATH}/api/${path}`;

      console.log(`API url -- ${url}`);

      const axiosOptions = {
        headers: options.headers
          ? JSON.parse(JSON.stringify(options.headers))
          : { 'Accept': 'application/json' },
        ...(method === 'POST' && { data: options.body }),
      };

      const response = await axios.request<IResponseTemplate>({
        url,
        method,
        ...axiosOptions,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(`Blup error response --- ${JSON.stringify(error.response.data)}`);
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