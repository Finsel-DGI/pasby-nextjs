import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { NationalFactory } from '../lib/national';

interface AuthContextProps {
  login: () => void;
  logout: () => void;
  user: NationalFactory | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const PasbyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<NationalFactory | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/eid/user');
        const r = response.data.user as NationalFactory;
        console.log(`r data -- ${JSON.stringify(r)}`);
        setUser(r);
      } catch {
        console.log('Error');
        setUser(null);
      }
      console.log(`There is a user -- ${user}`)
    };
    fetchUser();
  }, []);

  const login = () => {
    redirect('/api/eid/login');
  };

  const logout = async () => {
    await axios.post('/api/eid/logout');
    setUser(null);
    redirect('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
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