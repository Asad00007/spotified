import React , { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRouteWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn, navigate]);

  return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRouteWrapper;