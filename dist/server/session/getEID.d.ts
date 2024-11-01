import { User } from "@finsel-dgi/pasby-react";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
export declare const getEID: (cookie: ReadonlyRequestCookies) => Promise<User | undefined>;
