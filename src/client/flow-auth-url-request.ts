import { claims, identificationActionType } from "../types";

/**
 * 
 * @export
 * @interface FlowAuthorizationRequest
 */
export interface FlowAuthorizationRequest {
  /**
   * 
   * @type {string}
   * @memberof FlowAuthorizationRequest
   */
  'callback': string;
  /**
   * 
   * @type {string}
   * @memberof FlowAuthorizationRequest
   */
  'action': typeof identificationActionType;
  /**
   * 
   * @type {Array<claims>}
   * @memberof FlowAuthorizationRequest
   */
  'claims': Array<claims>;
  /**
   * 
   * @type {string}
   * @memberof FlowAuthorizationRequest
   */
  'payload': string;
  /**
  * 
  * @type {string}
  * @memberof FlowAuthorizationRequest
  */
  'challenge': string;
}