export declare const BASE_PATH: string;
export declare const SESSION_KEY = "pni";
export declare const CHALLENGE_KEY = "code-verifier";
export declare const DEFAULT_ERROR: IResponseTemplate;
export type status = 'successful' | 'handled' | 'mismatch' | 'token-mismatch' | 'unauthorized' | 'expiration' | 'failed' | 'extreme';
export type replyType = 'api_error' | 'param_error' | 'db_error' | 'external_service_error' | 'session_cancel' | 'unknown_error' | 'session_required' | 'authorization_error' | 'session_expiry' | 'invalid_request';
export interface IResponseTemplate {
    status: status;
    reason: string;
    type: replyType;
    /**
     * You can overlook this attribute
     */
    label?: string;
    /**
     * Present in a successful response
     */
    data?: Record<string, unknown>;
    /**
     * Present in an errored response
     */
    body?: Record<string, unknown>;
    /**
     * link to reference learning kit
     */
    helper_url?: string;
}
