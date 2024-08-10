// src/components/AuthProvider.tsx
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface AuthContextProps {
  login: () => void;
  logout: () => void;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get('/api/auth/token');
        setAccessToken(response.data.access_token);
      } catch {
        setAccessToken(null);
      }
    };
    fetchAccessToken();
  }, []);

  const login = () => {
    router.push('/api/eid/login');
  };

  const logout = async () => {
    await axios.post('/api/eid/logout');
    setAccessToken(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
