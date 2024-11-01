import { NextRequest, NextResponse } from "next/server";
import { AuthenticationParams } from "../types";
type setter = (key: string, value: string, exp?: number) => void;
type getter = (key: string) => Promise<string | undefined>;
declare const _default: (option: AuthenticationParams, cookieSetter: setter, cookieGetter: getter) => (req: NextRequest, { params }: {
    params: {
        auth: string;
    };
}) => Promise<NextResponse<unknown>>;
export default _default;
export declare function setChallengeCookie(cookieSetter: setter, { value, expires, key }: {
    value: string;
    expires?: number;
    key?: string;
}): Promise<void>;
export declare function setRedirectState(cookieSetter: setter, { value }: {
    value: string;
}): Promise<void>;
