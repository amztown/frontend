import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import P1 from "../assets/images/p1.png";
import Slider from "../Components/Slider";
import { useHistory } from "react-router-dom";
import { getBestSellers, getSearch } from "../Connection/products";
import { getCodes } from "../Connection/auth";
import { useAuth } from "../Contexts/Auth-Context";
import axios from "axios";
import "../Styles/Search.css";

const Search = ({ location }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState();
  const history = useHistory();
  const [loading, setLoading] = useState("Search");
  const { gbpRate } = useAuth();
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState();

  const handlePage = async () => {
    let res = await axios.get(
      "https://www.amazon.co.uk/s?k=sneakers&s=price-desc-rank&page=2&qid=1629537910&ref=sr_pg_2"
    );
    console.log(res);
  };

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
      "amazon.de",
      "amazon.fr",
      "amazon.es",
      "amazon.uk",
      "amazon.it",
    ];

    let i = 0;

    function yoo() {
      console.log(regions[i]);
      setLoading(`Getting Results From ${i < 4 ? regions[i] : "amazon.it"}`);
      console.log(i);
      i++;
    }

    let interval = setInterval(yoo, 5000);
    let res = await getSearch({
      searchValue: searchValue,
      page: 1,
    });
    console.log(res);
    if (res) {
      clearInterval(interval);
      history.push({
        pathname: "/search",
        state: {
          data: res.amazondotuk,
          page: res.page,
          searchValue: searchValue,
        },
      });
      setLoading("search");
    }
  };

  const handleLoadMore = async (evt) => {
    setLoadingMore(true);
    evt.preventDefault();
    console.log(searchValue);
    console.log(page);

    const regions = [
      "amazon.de",
      "amazon.fr",
      "amazon.es",
      "amazon.uk",
      "amazon.it",
    ];

    let i = 0;

    function yoo() {
      console.log(regions[i]);
      setLoading(`Getting Results From ${i < 4 ? regions[i] : "amazon.it"}`);
      console.log(i);
      i++;
    }

    let interval = setInterval(yoo, 5000);
    let res = await getSearch({ searchValue: searchValue, page: page + 1 });
    console.log(res);
    if (res) {
      clearInterval(interval);
      history.push({
        pathname: "/search",
        state: {
          data: res.amazondotuk,
          page: res.page,
          searchValue: searchValue,
        },
      });
      setLoading("search");
      setLoadingMore(false);
    }
  };

  const [codes, setCodes] = useState();

  useEffect(() => {
    setResults(location.state.data);
    setPage(location.state.page);
    setSearchValue(location.state.searchValue);
    window.scrollTo(0, 0);
  }, [location.state.data]);

  useEffect(() => {
    const fetchCodes = async () => {
      let res = await getCodes();
      console.log(res, "hello g");
      let codes = res.data.codes;
      setCodes({
        amazondotuk: codes[0],
        amazondotes: codes[1],
        amazondotfr: codes[2],
        amazondotde: codes[3],
        amazondotit: codes[4],
        amazondotse: codes[5],
        amazondotpl: codes[6],
        amazondotnl: codes[7],
      });
    };
    fetchCodes();
  }, []);
  return (
    <div>
      {console.log(gbpRate)}
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
                {/* <button onClick={handlePage}>Get page 2</button> */}
              </div>
            </form>
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container text-center">
        {/* <h3
          style={{
            fontSize: "45px",
            // textDecoration: "underline",
            // textDecorationColor: "orange",
          }}
          className="searchheading"
        >
          {" "}
          Results From Amazon.com
        </h3> */}
        <br />
        <br />
        <br />
        {results && (
          <div className="row">
            {results.map((result) => {
              return (
                <>
                  {" "}
                  {(result.price ||
                    result.amazondotfr?.price ||
                    result.amazondotde?.price ||
                    result.amazondotes?.price ||
                    result.amazondotit?.price) && (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center mb-5">
                      <Card
                        data={result}
                        codes={codes}
                        rate={gbpRate.toString().slice(0, 4)}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#6DC9B4",
            width: "150px",
            height: "55px",
            color: "white",
          }}
          className="rounded px-2"
          onClick={handleLoadMore}
        >
          {loadingMore ? loading : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Search;
