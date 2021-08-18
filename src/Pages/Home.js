import React, { useEffect, useState } from "react";
import Section2 from "../assets/images/section2.png";
import Slider from "../Components/Slider";
import Button from "../Components/Button";
import { getBestSellers, getSearch } from "../Connection/products";
import { useHistory } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  const [bestSellers, setBestSellers] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState("Search");
  const history = useHistory();

  const handleSearchValueChange = async (evt) => {
    console.log(evt.target.value);
    setSearchValue(evt.target.value);
  };

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
      setLoading(`Getting Results From ${i < 8 ? regions[i] : "amazon.pl"}`);
      console.log(i);
      i++;
    }

    let interval = setInterval(yoo, 5000);
    let res = await getSearch({ searchValue: searchValue });
    console.log(res);
    if (res) {
      clearInterval(interval);
      history.push({
        pathname: "/search",
        state: { data: res.amazondotuk },
      });
    }
  };
  useEffect(() => {
    const fetchBestSellers = async () => {
      let res = await getBestSellers();
      console.log(res);
      setBestSellers(res);
    };
    fetchBestSellers();
  }, []);
  return (
    <div className="main">
      {console.log(searchValue)}
      <div>
        <div className="container">
          <div className="row " style={{ height: "75vh" }}>
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center mx-2 mx-md-0">
              <div className="text-center">
                <h1
                  className="text-5xl xl:text-6xl "
                  style={{ color: "#FC4017" }}
                >
                  COMPARE BEST PRICES
                </h1>
                <br />
                <h3 className="text-2xl ">Of All European Countries Stores</h3>
                <br />
                <br />
                <form onSubmit={handleGetSearch}>
                  <div class="input-group mb-3">
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
                </form>

                {/* <Button onClick={handleGetSearch} text="Search" color="#FFFAF0" /> */}
              </div>
            </div>
            <div className="col-12 col-md-2"></div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ height: "75vh" }}>
            <div className="col-1 col-md-6 ">
              <img className="img-fluid" src={Section2} />
            </div>
            <div
              className="col-12 col-md-6 d-flex justify-content-center align-items-center 
            "
              style={{ backgroundColor: "#FFB2A1" }}
            >
              <div className="text-center my-5">
                <h1 className="text-3xl" style={{ color: "#FC4017" }}>
                  What is Amztown
                </h1>
                <br />
                <h3 style={{ color: "#F87B60" }}>
                  Amztown is the place where you can compare the prices of the
                  products between different Europian Amazon stores. <br />{" "}
                  Start Searching and comparing the prices
                </h3>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <div>
                <h1 className="text-4xl" style={{ color: "#FC4017" }}>
                  Products
                </h1>
              </div>
            </div>
            <div className="col-12 text-center">
              <br />
              <br />
              <br />
              {bestSellers && <Slider products={bestSellers} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
