export const BASE_PATH = "https://oauthn.web.app".replace(/\/+$/, "");
export const SESSION_KEY = 'pni';
export const CHALLENGE_KEY = 'code-verifier';
export const DEFAULT_ERROR: IResponseTemplate = {
  status: 'failed',
  reason: 'Connection is improper and thus has been interrupted',
  type: 'unknown_error',
};
export type status = 'successful' | 'handled' |
  'mismatch' | 'token-mismatch' | 'unauthorized' |
  'expiration' | 'failed' | 'extreme';

export type replyType = 'api_error' | 'param_error' | 'db_error' |
  'external_service_error' | 'session_cancel' | 'unknown_error' | 'session_required' |
  'authorization_error' | 'session_expiry' | 'invalid_request';
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
};