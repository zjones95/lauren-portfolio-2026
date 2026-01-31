import { AuthError, type JwtPayload } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "../utils";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [claims, setClaims] = useState<JwtPayload | null | undefined>(null);
  const [authError, setAuthError] = useState<AuthError | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  useEffect(() => {
    supabase.auth.getClaims().then(({ data }) => {
      if (data) {
        setClaims(data.claims);
      } else {
        setClaims(null);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data }) => {
        if (data) {
          setClaims(data.claims);
        }
      });
    });
    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setClaims(null);
  };

  const clearError = () => {
    setAuthError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authError,
        authLoading,
        clearError,
        claims,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
