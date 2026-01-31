import { createContext, useContext } from "react";
import { AuthError, type JwtPayload } from "@supabase/supabase-js";

export const useAuthContext = () => useContext(AuthContext);

export const AuthContext = createContext<{
  login: (email: string, password: string) => void;
  logout: () => void;
  authLoading: boolean;
  authError: AuthError | null;
  clearError: () => void;
  claims?: JwtPayload | null;
}>({
  login: () => null,
  logout: () => null,
  authLoading: false,
  authError: null,
  clearError: () => null,
  claims: undefined,
});
