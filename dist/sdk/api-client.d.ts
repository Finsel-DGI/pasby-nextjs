import { IResponseTemplate } from "./base";
export type HTTP_METHOD = 'POST' | 'GET';
export type Request = {
    body?: Record<string, unknown>;
    headers?: Record<string, unknown>;
};
/**
 * Represents an API request function that sends HTTP requests to a specified path.
 * @param path - The path to which the HTTP request will be sent.
 * @returns An object containing a request function.
 */
declare const api: (path: string) => {
    /**
     * Sends an HTTP request to the specified path using the provided method and options.
     * @param method - The HTTP method to be used for the request (POST or GET).
     * @param options - An object containing optional request parameters like body and headers.
     * @returns A Promise that resolves to the response data or an error object.
     */
    request: (method: HTTP_METHOD, param: Request) => Promise<IResponseTemplate>;
};
export default api;
