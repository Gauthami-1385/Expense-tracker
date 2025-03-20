import { createContext, useEffect, useState } from "react";
import { base_url } from "../constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    if (token) {
      setUser({ email: "" });
    }
  }, [token]);
  const login =  async (email, password) => {
    console.log('hi')
    try {
      const res = await fetch(`${base_url}/login`, {
        method: POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  email, password }),
      });
  
      const data=await res.json()
      if(!res.ok){
          throw new Error(data.message||'Registration Failed')
      }
      if (response.token) {
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem("token", response.token);
      }
    } catch (e) {console.log(e);}
  };
  
  
  
 
  const logout = async () => {
    try {
      setToken(response.token);
      setUser(response.user);
      localStorage.removeItem("token", response.token);
    } catch (e) {
      console.log(e);
    }
  };
  const registerUser = async (name, email, password) => {
    try {
      const res = await fetch(`${base_url}/register`, {
        method: POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data=await res.json()
      if(!res.ok){
          throw new Error(data.message||'Registration Failed')
      }
    } catch (e) {}
  };
  
    
  return (
    <AuthContext.Provider value={{ user, token, login, logout,registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
