import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#6DC9B4", height: "273px", color: "white" }}
      className="mt-5"
    >
      <div className="row h-100 ">
        <div className="col-6 col-md-3 d-flex justify-content-center align-items-center">
          <div>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center align-items-center">
          <div>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center align-items-center">
          <div>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
            <h1>Lorum Ipsum</h1>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center align-items-center">
          <div>
            <h1>
              <i
                style={{
                  fontSize: "31px"
                }}
                class="fab fa-facebook-f m-2 "
              ></i>
            </h1>
            <h1>
              <i
                style={{
                  fontSize: "31px"
                }}
                class="fab fa-instagram m-2"
              ></i>
            </h1>
            <h1>
              <i
                style={{ fontSize: "31px" }}
                class="fab fa-linkedin-in m-2"
              ></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
