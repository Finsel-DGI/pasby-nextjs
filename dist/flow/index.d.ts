import { AuthenticationParams } from "../sdk";
import { NextRequest, NextResponse } from "next/server";
export declare function loginWithPasby(_req: NextRequest, options: AuthenticationParams): Promise<string>;
export declare function tokenSwap(_req: NextRequest, params: URLSearchParams): Promise<NextResponse<unknown>>;
