import { claims, actions } from "./common.types";
import { User } from "./user.type";

export type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
}

export type AuthenticationParams = {
  claims?: Array<claims>,
  payload: string,
  action: actions,
  redirectPath?: string;
}