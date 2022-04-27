import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ isLoggedIn, children }) {
  return (


    isLoggedIn ? children : <Navigate to="/signin" />


  );
}
