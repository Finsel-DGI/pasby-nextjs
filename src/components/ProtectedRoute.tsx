import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { config } from '../config';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    const { postLoginFallbackURL } = config;
    router.push(postLoginFallbackURL ?? '/'); // Redirect to login if not authenticated
    return null;
  }

  return <>{children}</>;
};
