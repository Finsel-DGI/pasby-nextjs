import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import { CHALLENGE_KEY, SESSION_KEY } from '../utils/keys';
import callback from '../sdk/callback';

interface AuthContextProps {
  isAuthenticated: boolean;
  error?: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const PasbyProvider = ({ children, clientId, loginFallback, logoutPath, callbackPath }: {
  children: any,
  clientId: string;
  callbackPath: string;
  loginFallback: string;
  logoutPath: string;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const token = getCookie(SESSION_KEY);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleCallback = async () => {
    const verifier = getCookie(CHALLENGE_KEY);
    if (!verifier) {
      setError("No code verifier found for PKCE");
      return;
    }
    await callback(verifier, clientId).then((c) => {
      if (!c) return;
      setIsAuthenticated(true);
      window.location.href = loginFallback;
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
    <AuthContext.Provider value={{ isAuthenticated, logout, error }}>
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