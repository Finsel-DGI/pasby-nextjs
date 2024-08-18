import { BaseAPI } from "../lib/base";
import { AuthenticationParams } from "../types";
import { FlowAPI } from "./flow-api";

export class FlowClient extends BaseAPI {
  public static login(options?: AuthenticationParams,
    redirectState?: string) {
    return FlowAPI().getAuthUrl(options, redirectState);
  }

  public static callback(code: string) {
    return FlowAPI().handshake(code);
  }

  public static user() {
    return FlowAPI().resource();
  }
  
  public static logout() {
    return FlowAPI().resource();
  }
}