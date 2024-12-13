import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const { token } = useSelector((state) => state.auth); // Assuming token is stored in Redux

  // If there is no token or if token is expired (you can add expiration check here)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return element; // Render the component if the user is authenticated
};

export default ProtectedRoute;
