import { redirect } from "next/navigation";
import FlowClient from "../client";
import { AuthenticationParams } from "../types";
import { clearSession } from "../sever/handler";

interface PasbyState {
  login: () => void;
  logout: () => void;
}

export const usePasby = (options?: AuthenticationParams): PasbyState => {

  const login = async () => {
    try {
      const url = await FlowClient.login(options);
      redirect(url);
    } catch (e) {
      console.log('Error -- ', e);
    }
  };

  const logout = async () => {
    await clearSession();
  };

  return { login, logout };
};
