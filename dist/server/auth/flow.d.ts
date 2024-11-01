import { AuthenticationParams } from "../types";
import { User } from "@finsel-dgi/pasby-react";
export declare namespace Flow {
    function login({ claims, payload, action, redirect_uri, pkceExp }: AuthenticationParams & {
        /**
         * Your app redirect url as whitelisted in console
         */
        redirect_uri: string;
        /**
         * Path to return user to after handshake incase you'd love to retain UI state
         */
        state?: string;
        /**
         * Provide a duration in minutes when the pkceVerifier will expire
         */
        pkceExp?: number;
        /**
         * Should we return to you a value or simply redirect the user to the oauth screen
         */
        redirect: boolean;
    }): Promise<{
        link: string;
        id: string;
        pkce: string;
    }>;
    function tokenSwap({ flow, code, verifier }: {
        /**
         * The handshake query value received by the redirect from pasby authorization server
         */
        code: string;
        /**
         * This flow query value received by the redirect from pasby authorization sever
         */
        flow: string;
        /**
         * PKCE state value used to validate client
         */
        verifier?: string;
    }): Promise<{
        access: string;
        exp: number;
        csrf: string;
    }>;
    function eidResource({ challenge, accessCode }: {
        /**
         * The challenge code pasby returned to your app during handshake
         */
        challenge?: string;
        /**
         * Return the access code provided by on token swap (handshake)
         */
        accessCode?: string;
    }): Promise<User>;
}
