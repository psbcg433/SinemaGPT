// src/components/PublicOnlyRoute.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicOnlyRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? <Navigate to="/feed" replace /> : children;
};

export default PublicOnlyRoute;
