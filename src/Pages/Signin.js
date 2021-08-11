import React, { useState, useEffect } from "react";
import Signinimage from "../assets/images/signin.png";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useAuth } from "../Contexts/Auth-Context";
import { signin } from "../Connection/auth";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, NavLink } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async () => {
    console.log(state);
    let res = await signin(state);
    console.log(res);
    if (res.data.success === true) {
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
    <div style={{ overflowX: "hidden", backgroundColor: "white" }}>
      {console.log(state.email, state.password)}
      <div className="">
        <div className="row">
          <div
            className={`col-0  col-md-6 ${
              window.outerWidth > "425" ? "null" : "hidden"
            } `}
          >
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={Signinimage} />
          </div>
          <div className="col-12 col-md-6">
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <h1 className="text-4xl " style={{ color: "#F87B60" }}>
                  SIGN IN
                </h1>
                <div className="col-12 " style={{ height: "40px" }}></div>
                <div className="col-12 w-100">
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
                        onChange={handleChange}
                        name="email"
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
                        onChange={handleChange}
                        name="password"
                      />
                    </div>
                    {/* <div className="d-flex justify-content-start ">
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
                      <Button text="Sign in" color="white" />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <div
                      className="m-3"
                      style={{ color: "#F87B60", fontSize: "20px" }}
                    >
                      Need Account ?
                    </div>
                    <NavLink
                      style={{ textDecoration: "none", color: "white" }}
                      to="/signup"
                      // className="mx-4 mt-2 "
                      className="mt-1"
                      // onClick={handleRedirection}
                    >
                      <button className="mt-2 btn-sm btn-outline-secondary">
                        Create Account
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
