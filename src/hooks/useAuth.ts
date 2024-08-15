import { useState, useEffect } from 'react';
import { AuthState } from '../types';
import { getCookie } from 'cookies-next';

export const useAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = getCookie('access_token');
    if (token) {
      setIsAuthenticated(true);
      // Fetch user details or handle the user state
    }
    setIsLoading(false);
  }, []);

  return { isAuthenticated, isLoading, user };
};
