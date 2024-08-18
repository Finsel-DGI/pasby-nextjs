export { useAuth } from './hooks/useAuth';
export { useIsAuthenticated } from './hooks/useIsAuthenticated';
export { useUser } from './hooks/useUser';
export { usePasby } from './hooks/usePasby';

// Export middleware
export { withAuth } from './middleware/withAuth';

// Export components
export { AuthProvider } from './components/AuthProvider';

// Export types if needed
export type { User, AuthState, AuthenticationParams } from './types';

export * from './api';