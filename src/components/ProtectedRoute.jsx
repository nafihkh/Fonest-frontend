import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user")); // store user info after login

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // If route requires specific role
  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}