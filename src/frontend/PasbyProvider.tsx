import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import { CHALLENGE_KEY, SESSION_KEY } from '../utils/keys';
import callback from '../sdk/callback';

interface AuthContextProps {
  isAuthenticated: boolean;
  callbackError?: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const PasbyProvider = ({ children, clientId, loginFallback, logoutPath, callbackPath, pkceCookieKey }: {
  children: any,
  clientId: string;
  callbackPath: string;
  pkceCookieKey: string;
  loginFallback: string;
  logoutPath: string;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [callbackError, setError] = useState<string | undefined>();

  useEffect(() => {
    const token = getCookie(SESSION_KEY);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleCallback = async () => {
    await callback(pkceCookieKey, clientId).then((c) => {
      if (!c) return;
      setIsAuthenticated(true);
      window.location.href = loginFallback;
    }).catch((e) => {
      const message = (e as Error).message;
      window.location.href = `${window.location.host}/${logoutPath}?authError=${btoa(message)}`;
    });
  };

  const logout = () => {
    deleteCookie(SESSION_KEY);
    setIsAuthenticated(false);
    window.location.href = `${window.location.host}/${logoutPath}`;
  };

  useEffect(() => {
    if (window.location.pathname === callbackPath) {
      handleCallback();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, callbackError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const usePasby = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('usePasby must be used within a PasbyProvider');
  }
  return context;
};