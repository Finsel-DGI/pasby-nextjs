import { usePasby } from "../context/PasbyContext";

export const useAuth = () => {
  const { user, login, logout } = usePasby();

  const isAuthenticated = !!user;

  return { user, isAuthenticated, login, logout };
};
