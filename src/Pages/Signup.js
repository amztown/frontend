import React, { useState, useEffect, useContext } from "react";
import Button from "../Components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signupimage from "../assets/images/signup.png";
import { useHistory, NavLink } from "react-router-dom";
import { signup } from "../Connection/auth";
import { useAuth } from "../Contexts/Auth-Context";

const Signup = () => {
  // const { value } = useContext(AuthContext);

  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { login } = useAuth();
  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async () => {
    console.log(state);
    let res = await signup(state);
    console.log(res);
    if (res.data.success === true) {
      // console.log("error");
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      login();
      window.localStorage.setItem("username", res.data.username);
      window.localStorage.setItem("accessToken", res.data.access_token);
      window.localStorage.setItem("email", res.data.email);
      window.localStorage.setItem("id", res.data.id);
      history.push("/");
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <br />
                <br />
                <h1 className="text-4xl " style={{ color: "#F87B60" }}>
                  CREATE ACCOUNT
                </h1>
                <div className="col-12 " style={{ height: "40px" }}></div>
                <div className="col-12 w-100">
                  <div className="">
                    <div className="d-flex justify-content-center">
                      <label className=" w-75" for="exampleInputPassword1">
                        Enter Username
                      </label>
                    </div>

                    <div className="d-flex justify-content-center ">
                      <input
                        type="text"
                        className="form-control d-block w-75 "
                        id="exampleInputPassword1"
                        value={state.username}
                        name="username"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="">
                    <div className="d-flex justify-content-center">
                      <label className=" w-75" for="exampleInputPassword1">
                        Enter Email
                      </label>
                    </div>

                    <div className="d-flex justify-content-center ">
                      <input
                        type="email"
                        className="form-control d-block w-75 "
                        id="exampleInputPassword1"
                        value={state.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="">
                    <div className="d-flex justify-content-center">
                      <label className=" w-75" for="exampleInputPassword1">
                        Enter Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center ">
                      <input
                        type="password"
                        className="form-control d-block w-75 "
                        id="exampleInputPassword1"
                        value={state.password}
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="d-flex justify-content-start ml-5 ">
                      <small id="emailHelp" class="form-text text-muted">
                        Forgot Password ?
                      </small>
                    </div> */}
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <div
                      className="w-75 d-flex justify-content-center"
                      onClick={handleSubmit}
                    >
                      <Button text="Sign Up" color="white" />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <div
                      className="m-2 mt-3"
                      style={{ color: "#F87B60", fontSize: "16px" }}
                    >
                      Already Have An Account ?
                    </div>
                    <NavLink
                      style={{ textDecoration: "none", color: "white" }}
                      to="/signin"
                      // className="mx-4 mt-2 "
                      className="mt-1"
                      // onClick={handleRedirection}
                    >
                      <button className="mt-2 btn-sm btn-outline-secondary">
                        Sign In
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
          <div className="col-0 d-none d-md-block col-md-6 ">
            <div className="row d-flex">
              <div
                style={{ height: "50vh", backgroundColor: "#FFB2A1" }}
                className="col-12 "
              >
                <br />
                <div className=" d-flex justify-content-center ">
                  <h1
                    style={{ color: "white" }}
                    className="text-5xl mt-5 d-block"
                  >
                    WELCOME
                  </h1>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <div className=" d-flex justify-content-center ">
                  <p className="d-block" style={{ color: "#FC4017" }}>
                    CREATE YOUR ACCOUNT FOR FREE
                  </p>
                </div>
              </div>
              <div className="col-12 h-50 align-items-end p-0">
                <img src={Signupimage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
