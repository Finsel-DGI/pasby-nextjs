import type { PasbyRuntimeConfig } from "../runtime-config";
import { AuthenticationParams } from "../types";
import { User } from "@finsel-dgi/pasby-react";
export declare namespace Flow {
    function login({ claims, payload, action, redirect_uri, pkceExp, redirect, state, }: AuthenticationParams & {
        redirect_uri: string;
        state?: string | null;
        pkceExp?: number;
        redirect: boolean;
    }, pasby?: PasbyRuntimeConfig): Promise<{
        link: string;
        id: string;
        pkce: string;
    }>;
    function tokenSwap({ flow, code, verifier, }: {
        code: string;
        flow: string;
        verifier?: string;
    }, pasby?: PasbyRuntimeConfig): Promise<{
        access: string;
        exp: number;
        csrf: string;
    }>;
    function eidResource({ challenge, accessCode, }: {
        challenge?: string;
        accessCode?: string;
    }, pasby?: PasbyRuntimeConfig): Promise<User>;
}
