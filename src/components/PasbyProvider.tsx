import React from 'react';
import { PasbyProvider } from '../context/PasbyContext';

export const PasbyAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PasbyProvider>
      {children}
    </PasbyProvider>
  );
};
