import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Logo from "../assets/images/Logo.png";
import { useAuth } from "../Contexts/Auth-Context";
import { ToastContainer, toast } from "react-toastify";
// import { getAds } from "../Connection/Placead";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(4),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { loggedIn, logout, notify, setNotify } = useAuth();
  const [ads, setAds] = useState();

  const history = useHistory();

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <nav
        style={{ backgroundColor: "#F87B60" }}
        class=" navbar navbar-expand-lg navbar-light  "
      >
        <div className="container-fluid">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            class="nav-link"
            to="/"
          >
            <img
              className="img-fluid"
              style={{ height: "75px", marginLeft: "-25px" }}
              src={Logo}
            />
            {/* LOGO */}
          </NavLink>
          {/* <a class="navbar-brand" href="/">
            Logo
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li> */}
            </ul>
            {/* <button className="btn btn-danger"> hello</button> */}

            {/* <div className="mr-3">
              <i class="far fa-bell"></i>
              <br />
              My Research
            </div> */}

            <div className="mb-2 mb-lg-0 d-flex justify-content-start">
              {loggedIn === false && (
                <div>
                  {" "}
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/signin"
                    // className="mx-4 mt-2 "
                    className="mr-3"
                    // onClick={handleRedirection}
                  >
                    Login
                  </NavLink>
                  <button
                    style={{
                      backgroundColor: "#6DC9B4",
                      width: "150px",
                      height: "55px",
                      color: "white",
                    }}
                    className="rounded mx-3"
                    // onClick={handleGetSearch}
                  >
                    <NavLink
                      style={{ textDecoration: "none", color: "white" }}
                      to="/signup"
                      // className="mx-4 mt-2 "
                      className="mr-3"
                      // onClick={handleRedirection}
                    >
                      Signup
                    </NavLink>
                  </button>
                </div>
              )}
              {loggedIn === true && (
                <button
                  style={{
                    backgroundColor: "#6DC9B4",
                    width: "150px",
                    height: "55px",
                    color: "white",
                  }}
                  className="rounded mx-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>

            {/* <div className="mr-3">
              <i class="far fa-heart"></i>
              <br />
              Favourites
            </div>
            <div className="mr-3">
              <i class="far fa-envelope-open"></i>
              <br />
              Messages
            </div>
            <div className="mr-3">
              <i class="far fa-user"></i>
              <br />
              Login
            </div> */}
            {/* <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
