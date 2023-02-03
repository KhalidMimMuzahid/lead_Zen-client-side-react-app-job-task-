import { createContext, useState } from "react";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [id, setId] = useState("");

  const authInfo = {
    id,
    setId,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
