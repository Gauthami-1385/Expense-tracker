import { createContext, useEffect, useState } from "react";
import { base_url } from "../constants";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";  
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();  

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    if (token) {
      setUser({ email: "" });
    }
  }, [token]);

  const login = async (email, password) => {
  
    try {
      const res = await fetch(`${base_url}/auth/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Registration Failed");
      }
      console.log(res,'eea')
      if (res.ok) {
        setToken(res.token);
        setUser(res.user);
        localStorage.setItem("token", res.token);
        toast('login successful')
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
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
    console.log(name,email,password)
    console.log(`${base_url}/auth/register`)
    try {
      console.log('hi')
      const res = await fetch(`${base_url}/auth/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast(res.message)
        throw new Error(data.message || "Registration Failed");
      }
      else{
        toast('Welcome')
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
