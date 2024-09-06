import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phNumber, setPhNumber] = useState(null);
  const [authOtp, setAuthOtp] = useState(null);

  useEffect(() => {
    const loadAuthData = () => {
      const storedUid = localStorage.getItem('uid');
      const storedName = localStorage.getItem('userName');
      const storedEmail = localStorage.getItem('userEmail');
      const storedPhNumber = localStorage.getItem('userPhone');

      if (storedUid) setUid(storedUid);
      if (storedName) setName(storedName);
      if (storedEmail) setEmail(storedEmail);
      if (storedPhNumber) setPhNumber(storedPhNumber);
    };

    // On initial render, load the stored authentication data.
    loadAuthData();
  }, []);

  const login = (newUid, name, email, phNumber) => {
    setUid(newUid);
    setName(name);
    setEmail(email);
    setPhNumber(phNumber);

    localStorage.setItem('uid', newUid);
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phNumber);
  };

  const logout = () => {
    setUid(null);
    setName(null);
    setEmail(null);
    setPhNumber(null);

    localStorage.removeItem('uid');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhone');
  };

  const value = {
    uid,
    name,
    email,
    phNumber,
    login,
    logout,
    authOtp,
    setAuthOtp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};