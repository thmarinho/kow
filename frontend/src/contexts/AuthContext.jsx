import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(Object.fromEntries(document.cookie.split('; ').map(e => e.split('='))).Authorization);

  const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useUser = () => useContext(AuthContext)

export default AuthProvider;
export {
  useUser
}
