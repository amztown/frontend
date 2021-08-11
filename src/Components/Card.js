import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

const Card = ({ data, code }) => {
  return (
    <div class="card shadow-lg rounded-lg" style={{ width: "300px" }}>
      <img
        style={{
          borderRadius: "12px",
          maxHeight: "420px",
          minHeight: "420px",
        }}
        src={data.image}
        className="card-img-top p-3 img-fluid  "
        alt="..."
      />
      {console.log(code, "I am code")}
      <div class="card-body">
        <h4 style={{ fontWeight: "bold" }} class="card-title">
          {" "}
          <a target="_blank" href={`${data.link}/?tag=${code}`}>
            {" "}
            {data.title.length > 60
              ? (data.title = `${data.title.slice(0, 50)}...`)
              : data.title}
          </a>
        </h4>
        <br />
        <div className="row my-3">
          <div className="col-7">
            {data.price?.value} {data.price?.currency}
          </div>
          <div className="col-5 text-center">
            <a target="_blank" href={`${data.link}/?tag=${code}`}>
              <p
                style={{
                  border: "2px solid ",
                  borderRadius: "50px",
                  color: "#6DC9B4",
                  width: "50%",
                  margin: "0",
                }}
              >
                <i class="fas fa-chevron-right"></i>
              </p>
            </a>
          </div>
        </div>
        {/* <div className="row my-3">
          <div className="col-7">Price</div>
          <div className="col-5 text-center">
            <p
              style={{
                border: "2px solid ",
                borderRadius: "50px",
                color: "#6DC9B4",
                width: "25%",
                margin: "0",
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div> */}
        {/* <div className="row my-3">
          <div className="col-7">Price</div>
          <div className="col-5 text-center">
            <p
              style={{
                border: "2px solid ",
                borderRadius: "50px",
                color: "#6DC9B4",
                width: "25%",
                margin: "0",
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div> */}
        {/* <div className="row my-3">
          <div className="col-7">Price</div>
          <div className="col-5 text-center">
            <p
              style={{
                border: "2px solid ",
                borderRadius: "50px",
                color: "#6DC9B4",
                width: "25%",
                margin: "0",
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
