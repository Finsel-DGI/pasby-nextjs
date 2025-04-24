import { NextRequest, NextResponse } from "next/server";
import { AuthenticationParams } from "../types";
type CookieSetter = (key: string, value: string, options?: {
    expires?: number;
    maxAge?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'lax' | 'strict' | 'none';
    httpOnly?: boolean;
}) => void;
declare const _default: (option: AuthenticationParams, errorFallbackPath: string) => (req: NextRequest, { params }: {
    params: {
        auth: string;
    };
}) => Promise<NextResponse<unknown>>;
export default _default;
export declare function setChallengeCookie(cookieSetter: CookieSetter, { value, expires, key }: {
    value: string;
    expires?: number;
    key?: string;
}): Promise<void>;
export declare function setRedirectState(cookieSetter: CookieSetter, { value }: {
    value: string;
}): Promise<void>;
