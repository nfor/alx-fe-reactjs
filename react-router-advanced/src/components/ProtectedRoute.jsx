import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('auth'); // simple auth check

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
