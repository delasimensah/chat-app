import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const useChat = () => useContext(AppContext);

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
