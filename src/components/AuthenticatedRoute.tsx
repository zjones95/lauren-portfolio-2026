import React, { useEffect } from "react";
import { useAuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const { claims } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (claims === null) {
      navigate("/login");
    }
  }, [claims, navigate]);

  return <>{children}</>;
};

export default AuthenticatedRoute;
