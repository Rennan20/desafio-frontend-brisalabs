import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({ component: Component }: ProtectedRouteProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default ProtectedRoute;
