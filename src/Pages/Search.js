import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import P1 from "../assets/images/p1.png";
import Slider from "../Components/Slider";
import { useHistory } from "react-router-dom";
import { getBestSellers, getSearch } from "../Connection/products";
import { getCodes } from "../Connection/auth";

import "../Styles/Search.css";

const Search = ({ location }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState("Search");

  const handleSearchValueChange = async (evt) => {
    console.log(evt.target.value);
    setSearchValue(evt.target.value);
  };

  // const handleGetSearch = async () => {
  //   console.log(searchValue);
  //   let res = await getSearch({ searchValue: searchValue });
  //   console.log(res);
  //   if (res) {
  //     setResults(res);
  //   }
  // };

  const handleGetSearch = async (evt) => {
    evt.preventDefault();
    console.log(searchValue);

    const regions = [
      "amazon.com",
      "amazon.ca",
      "amazon.de",
      "amazon.fr",
      "amazon.se",
      "amazon.es",
      "amazon.pl",
      "amazon.co.uk",
      "amazon.com.au",
      "amazon.it",
      "amazon.pl",
    ];

    let i = 0;

    function yoo() {
      console.log(regions[i]);
      setLoading(`Getting Results From ${regions[i]}`);
      console.log(i);
      i < 10 ? i++ : (i = 10);
    }

    let interval = setInterval(yoo, 3000);
    let res = await getSearch({ searchValue: searchValue });
    console.log(res);
    if (res) {
      clearInterval(interval);
      history.push({
        pathname: "/search",
        state: { data: res },
      });
      setLoading("search");
    }
  };

  const [amazondotuk, setAmazondotuk] = useState();
  const [amazondotes, setAmazondotes] = useState();
  const [amazondotfr, setAmazondotfr] = useState();

  const [amazondotde, setAmazondotde] = useState();

  const [amazondotit, setAmazondotit] = useState();

  const [amazondotse, setAmazondotse] = useState();

  const [amazondotpl, setAmazondotpl] = useState();
  const [amazondotnl, setAmazondotnl] = useState();

  useEffect(() => {
    setResults(location.state.data);
  }, [location.state.data]);

  useEffect(() => {
    const fetchCodes = async () => {
      let res = await getCodes();
      console.log(res, "hello g");
      let codes = res.data.codes;
      setAmazondotuk(codes[0].code);
      setAmazondotes(codes[1].code);
      setAmazondotfr(codes[2].code);
      setAmazondotde(codes[3].code);
      setAmazondotit(codes[4].code);
      setAmazondotse(codes[5].code);
      setAmazondotpl(codes[6].code);
      setAmazondotnl(codes[7].code);
    };
    fetchCodes();
  }, []);
  return (
    <div>
      {console.log(location.state)}
      <div className="container">
        <br />
        <br />
        <div className="row  ">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center mx-2 mx-md-0">
            <form className="text-center w-100" onSubmit={handleGetSearch}>
              <div className="text-center w-100">
                <div class="input-group mb-3 ">
                  <div class="input-group-prepend">
                    {/* <span class="input-group-text" id="inputGroup-sizing-default">
                    Default
                  </span> */}
                  </div>
                  <input
                    type="text"
                    class="form-control "
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{ borderRadius: "12px", borderColor: "#FC4017" }}
                    placeholder="Search Anything"
                    value={searchValue}
                    onChange={handleSearchValueChange}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#6DC9B4",
                    width: "150px",
                    height: "55px",
                    color: "white",
                  }}
                  className="rounded px-2"
                  onClick={handleGetSearch}
                >
                  {loading}
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3
              style={{
                fontSize: "45px",
                // textDecoration: "underline",
                // textDecorationColor: "orange",
              }}
              className="searchheading"
            >
              {" "}
              Results From Amazon.com
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotcom} code={amazondotuk} />
            )}
          </div>
          {/* <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 style={{ fontSize: "45px" }}>Results From Amazon.ca</h3>
            <br />
            <br />
            <br />
            {results && <Slider products={results.amazondotca} />}
          </div> */}
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.co.uk
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotuk} code={amazondotuk} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.nl
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotnl} code={amazondotnl} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.de
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotde} code={amazondotde} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="searchheading" className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.es
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotes} code={amazondotes} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.fr
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotfr} code={amazondotfr} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.se
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotse} code={amazondotse} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.pl
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotpl} code={amazondotpl} />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3 className="searchheading" style={{ fontSize: "45px" }}>
              Results From Amazon.it
            </h3>
            <br />
            <br />
            <br />
            {results && (
              <Slider products={results.amazondotit} code={amazondotit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
