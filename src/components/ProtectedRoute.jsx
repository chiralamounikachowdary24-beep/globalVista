import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = Cookies.get('jwt_token');
  const role = localStorage.getItem('role');

  // If no token is found, redirect to login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If roles are specified and the user's role doesn't match, redirect to home
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={role === 'admin' ? '/admin' : '/home'} replace />;
  }

  // Otherwise, allow access to the route
  return <Outlet />;
};

export default ProtectedRoute;
