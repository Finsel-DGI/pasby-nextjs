import { useAuth } from "..";

export const useIsAuthenticated = () => {
  const { user } = useAuth();
  return !!user;
};