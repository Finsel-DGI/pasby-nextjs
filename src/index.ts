// src/index.ts

// Export hooks
export { useAuth } from './hooks/useAuth';
export { useIsAuthenticated } from './hooks/useIsAuthenticated';
export { useUser } from './hooks/useUser';

// Export API routes handlers
export { loginHandler, logoutHandler, callbackHandler, resourceHandler } from './api/auth';

// Export middleware
export { withAuth } from './middleware/withAuth';

// Export components
export { AuthProvider } from './components/AuthProvider';

// Export types if needed
export type { User, AuthState } from './types';
