import React, { useContext, useState } from "react";
import "./App.css";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./Contexts/Auth-Context";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticatedRoutes } from "./Routes/routes";

function App() {
  const { loggedIn, login, logout } = useAuth();
  console.log(loggedIn);

  if (window.localStorage.getItem("accessToken")) {
    login();
  }

  return <AuthenticatedRoutes />;
}

export default App;
