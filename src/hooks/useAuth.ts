'use client'

import { useState, useEffect } from 'react';
import { AuthState, User } from '../types';
import { getCookie } from 'cookies-next';
import { SESSION_KEY } from '../lib/base';
import { getUser } from '../sever/handler';

export const useAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const token = getCookie(SESSION_KEY);
    if (token) {
      setIsAuthenticated(true);
    }
    const fetchUser = async () => {
      const response = await getUser();
      if (response) {
        setUser(response);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { isAuthenticated, isLoading, user };
};
