import React, { createContext, useEffect, useState } from "react";
import { getStoredToken } from '../lib/parseCookie';


interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
});

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const token = getStoredToken();

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};
