import { HTTP_METHOD, Request } from "@rebatlabs/ui-funs";
export declare const api: (path: string, method: HTTP_METHOD, options: Request) => Promise<Record<string, unknown>>;
