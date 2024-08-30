import { redirect } from "next/navigation";
import { AuthenticationParams } from "../sdk";

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