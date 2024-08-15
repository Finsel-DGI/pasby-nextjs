/* tslint:disable */
/* eslint-disable */

// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IResponseTemplate } from './types';

// export const BASE_PATH = "http://127.0.0.1:6001/bankid-project/us-central1/oauth".replace(/\/+$/, "");
export const BASE_PATH = "https://oauthn.web.app".replace(/\/+$/, "");

export const DEFAULT_ERROR: IResponseTemplate = {
  status: 'failed',
  reason: 'Connection is improper and thus has been interrupted',
  type: 'unknown_error',
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string;
  options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {

  constructor(protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
    this.basePath = this.basePath;
  }
};