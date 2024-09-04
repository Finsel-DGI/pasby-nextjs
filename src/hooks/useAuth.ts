import { AuthenticationParams } from "../sdk/auth.types";

// interface LoginState {
//   login: () => Promise<void>;
// }

export const useAuth = (params: AuthenticationParams) => {

  const login = async () => {
    // const url = await loginWithPasby(params);
    // redirect(url);
  }

  return {login}
}