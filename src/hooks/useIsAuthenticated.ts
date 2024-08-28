import { useAuth } from "./useAuth";

export const useIsAuthenticated = () => {
  const { user } = useAuth();
  return !!user;
};