import { createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    if (token) {
      setUser({ email: "" });
    }
  }, [token]);
  const login = async (email, password) => {
    const response = await loginUser(email, password);
    if (response.token) {
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem("token", response.token);
    }
  };
  const logout = async () => {
    setToken(response.token);
    setUser(response.user);
    localStorage.removeItem("token", response.token);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
