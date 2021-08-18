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
  const [gbpRate, setGbpRate] = useState("");

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

  useEffect(() => {
    const getRate = async () => {
      let res = await axios.get(
        "https://free.currconv.com/api/v7/convert?q=GBP_EUR&compact=ultra&apiKey=f9bfbc15b661c00571bd"
      );
      console.log(res, "what rate");
      setGbpRate(res.data.GBP_EUR);
    };

    getRate();
  }, []);

  const authContextValue = { loggedIn, login, logout, gbpRate };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
