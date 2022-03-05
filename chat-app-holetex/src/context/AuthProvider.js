import { Spin } from "antd";
import React, { useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export const AuthConext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
        return;
      }
      setIsLoading(false);
      navigate("/login");
    });
    return () => {
      unsubscribed();
    };
  }, [navigate]);

  return (
    <AuthConext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthConext.Provider>
  );
}
