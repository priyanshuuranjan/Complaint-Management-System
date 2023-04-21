import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Config";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, settLoading] = useState(true);
  
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      settLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    logout
  };
  return <AuthContext.Provider value={value}>{loading ? <h1>Loading.....</h1> : children}</AuthContext.Provider>;
}
