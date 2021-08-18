import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";
import ReactCountryFlag from "react-country-flag";
import CurrencyConverter from "react-currency-conv";
// const currencies  = require("currency-converter-lt");
import Converter from "./Converter";

const Card = ({ data, codes, rate }) => {
  // let currencyConverter = new CC();
  return (
    <div class="card shadow rounded-lg">
      <img
        style={{
          borderRadius: "12px",
          // maxHeight: "420px",
          // minHeight: "420px",
        }}
        src={data.image}
        className="card-img-top p-3 img-fluid  "
        alt="..."
      />
      {console.log(Number(rate), "I am code")}
      <div class="card-body">
        <h4 style={{ fontWeight: "bold" }} class="card-title">
          {" "}
          {data.title.length > 60
            ? (data.title = `${data.title.slice(0, 50)}...`)
            : data.title}
        </h4>
        <br />
        {data.price && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="GB"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="UK"
              />
            </div>

            <div className="col-6">
              {/* <Converter /> */}
              {data.price?.value * Number(rate)} EUR
              {/* <CurrencyConverter from={"USD"} to={"CAD"} value={29} /> */}
              {/* {currencyConverter
                .from("GBP")
                .to("EUR")
                .amount(data.price.value)
                .convert()
                .then((response) => {
                  console.log(response, "hello response"); //or do something else
                })} */}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.link}/?tag=${codes?.amazondotuk.code}`}
              >
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
        )}

        {data.amazondotfr && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="FR"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="FR"
              />
            </div>

            <div className="col-6">
              {data.amazondotfr?.price?.value}{" "}
              {data.amazondotfr.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotfr.link}/?tag=${codes?.amazondotfr.code}`}
              >
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
        )}

        {data.amazondotde && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="DE"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="DE"
              />
            </div>

            <div className="col-6">
              {data.amazondotde.price?.value} {data.amazondotde.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotde.link}/?tag=${codes?.amazondotde.code}`}
              >
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
        )}

        {data.amazondotit && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="IT"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IT"
              />
            </div>

            <div className="col-6">
              {data.amazondotit.price?.value} {data.amazondotit.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotit.link}/?tag=${codes?.amazondotit.code}`}
              >
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
        )}

        {data.amazondotse && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="SE"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="SE"
              />
            </div>

            <div className="col-6">
              {data.amazondotse.price?.value} {data.amazondotse.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotse.link}/?tag=${codes?.amazondotse.code}`}
              >
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
        )}

        {data.amazondotes && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="ES"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="ES"
              />
            </div>

            <div className="col-6">
              {data.amazondotes.price?.value} {data.amazondotes.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotes.link}/?tag=${codes?.amazondotes.code}`}
              >
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
        )}
        {data.amazondotnl && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="NL"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="NL"
              />
            </div>

            <div className="col-6">
              {data.amazondotnl.price?.value} {data.amazondotnl.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotnl.link}/?tag=${codes?.amazondotnl.code}`}
              >
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
        )}
        {data.amazondotpl && (
          <div className="row my-3">
            <div className="col-3 ">
              <ReactCountryFlag
                countryCode="PL"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="PL"
              />
            </div>

            <div className="col-6">
              {data.amazondotpl.price?.value} {data.amazondotpl.price?.currency}
            </div>
            <div className="col-3 text-center">
              <a
                target="_blank"
                href={`${data.amazondotpl.link}/?tag=${codes?.amazondotpl.code}`}
              >
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
        )}
      </div>
    </div>
  );
};

export default Card;
