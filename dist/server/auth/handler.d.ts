import { NextResponse } from "next/server";
import type { AuthenticationParams } from "../types";
import { type PasbyRuntimeConfig } from "../runtime-config";
/**
 * Minimal `NextRequest` shape so the hub and SDK are not pinned to the same `next` install.
 */
export type PasbyHandlerRequest = {
    nextUrl: Pick<URL, "origin" | "searchParams">;
    cookies: {
        get(name: string): {
            value: string;
        } | undefined;
    };
};
/** Per-tenant overrides for the Pasby login request (merged over `createPasbyHandler` defaults). */
export type PasbyLoginOverride = Partial<Pick<AuthenticationParams, "claims" | "action" | "payload">>;
export type PasbyHandlerContext = {
    config: PasbyRuntimeConfig;
    /** When set at login, stored in httpOnly cookie for handshake/logout tenant resolution. */
    tenantId?: string;
    /**
     * Applied during the **login** phase only. When `claims` / `action` / `payload` are set here,
     * they override the static options passed to `createPasbyHandler` for that request.
     */
    login?: PasbyLoginOverride;
};
export type ResolvePasbyContext = (req: PasbyHandlerRequest, phase: "login" | "handshake" | "logout") => Promise<PasbyHandlerContext | null>;
type CookieSetter = (key: string, value: string, options?: {
    expires?: number;
    maxAge?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "lax" | "strict" | "none";
    httpOnly?: boolean;
}) => void;
export declare function createPasbyHandler(option: AuthenticationParams, errorFallbackPath: string, resolveContext: ResolvePasbyContext): (req: PasbyHandlerRequest, { params }: {
    params: {
        auth: string;
    };
}) => Promise<NextResponse<unknown>>;
/** Backward-compatible handler: reads Pasby credentials from `process.env` only. */
export default function legacyHandler(option: AuthenticationParams, errorFallbackPath: string): (req: PasbyHandlerRequest, { params }: {
    params: {
        auth: string;
    };
}) => Promise<NextResponse<unknown>>;
export declare function setChallengeCookie(cookieSetter: CookieSetter, { value, expires, key }: {
    value: string;
    expires?: number;
    key?: string;
}): Promise<void>;
export declare function setRedirectState(cookieSetter: CookieSetter, { value }: {
    value: string;
}): Promise<void>;
export {};
