import { User } from "@finsel-dgi/pasby-react";
import type { PasbyRuntimeConfig } from "../runtime-config";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
/**
 * Load Pasby eID user from cookies. Pass `pasby` when using per-tenant `SECRET_GEN` / app id (hub turnkey).
 */
export declare const getEID: (cookie: ReadonlyRequestCookies, pasby?: PasbyRuntimeConfig) => Promise<User | undefined>;
