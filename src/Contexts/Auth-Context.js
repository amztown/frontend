import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
// import { API_BASE_URL } from 'src/utils/API_URLS';
// import { withRouter } from 'react-router';
import { toast } from "react-toastify";
// import { getApiKey } from "../Connection/products";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiKey, setApiKey] = useState();

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("cliked");
    window.localStorage.clear();
    setLoggedIn(false);

    toast.success("You are logged out", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  console.log(apiKey, "I am apikey");

  const authContextValue = { loggedIn, login, logout };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
