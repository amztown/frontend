import React from "react";
import "../App.css";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Navbar from "../Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../Contexts/Auth-Context";
import "react-toastify/dist/ReactToastify.css";

export const AuthenticatedRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer
          style={{
            width: "400px",
            textAlign: "center",
            fontSize: "1.3em",
          }}
        />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home />} />
          <Route exact path="/signup" render={(routeProps) => <Signup />} />
          <Route exact path="/signin" render={(routeProps) => <Signin />} />
          <Route
            exact
            path="/search"
            render={(routeProps) => <Search {...routeProps} />}
          />
          {/* <Route
                exact
                path="/dashboard"
                render={(routeProps) => <Dashboard />}
              /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
