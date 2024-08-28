import { useAuth } from "./useAuth";

export const useUser = () => {
  const { user } = useAuth();
  return user;
};