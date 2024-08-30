import { NextResponse } from "next/server";
import { AuthenticationParams } from "../sdk";
export declare function loginWithPasby(options?: AuthenticationParams): Promise<string>;
export declare function tokenSwap(params: URLSearchParams): Promise<NextResponse<unknown>>;
export declare function testCookie(): Promise<void>;
