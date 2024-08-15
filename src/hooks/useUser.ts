import { useAuth } from "..";

export const useUser = () => {
  const { user } = useAuth();
  return user;
};