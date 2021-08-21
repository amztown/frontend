import axios from "axios";
// let apiKey = "F54C31E20DAD40ECA16CCE58B5A46F42";

const getApiKey = async (data) => {
  let response;
  response = await axios.get(
    `https://amztownbackend.herokuapp.com/api/apikey/`
  );

  console.log(response, "i am response");
  return response.data.apiKey[0].apiKey;
};

const getBestSellers = async () => {
  let apiKey = await getApiKey();
  const params = {
    api_key: apiKey,
    type: "search",
    amazon_domain: "amazon.com",
    search_term: "iphone",
    sort_by: "price_high_to_low",
  };

  let res = await axios.get("https://api.rainforestapi.com/request", {
    params,
  });

  console.log(res.data.search_results);
  return res.data.search_results;
};

const getSearch = async (data) => {
  console.log(data);
  const { searchValue, page } = data;
  console.log(page);
  let apiKey = await getApiKey();

  let asins = [];
  let amazondotfr = [];
  let amazondotde = [];
  let amazondotit = [];
  let amazondotes = [];

  const getAmazondotcom = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.com",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotuk = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.co.uk",
      search_term: searchValue,
      sort_by: "price_high_to_low",
      page: page,
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    res.data.search_results.map((res) => {
      if (res.price?.value) {
        console.log("if is running");
        asins.push(res.asin);
      }
    });

    console.log(asins, "we are asins");

    let frResults;
    let deResults, itResults, plResults, seResults, esResults, nlResults;
    let ukResults = res.data.search_results;
    let asinsLength = asins.length;

    let promises = asins.map(async (asin, i) => {
      frResults = await getAmazondotfr(asin);
      deResults = await getAmazondotde(asin);
      itResults = await getAmazondotit(asin);
      esResults = await getAmazondotes(asin);

      console.log("asins loop is running");

      if (asinsLength === i + 1) {
        console.log("i am running");
        res.data.search_results.map((prod, i) => {
          frResults.map((prodfr) => {
            if (prod.asin === prodfr.asin) {
              ukResults[i] = {
                ...prod,
                amazondotfr: {
                  link: prodfr.link,
                  price: prodfr.buybox_winner.price,
                },
              };
            }
          });
        });
        res.data.search_results.map((prod, i) => {
          deResults.map((prodde) => {
            if (prod.asin === prodde.asin) {
              ukResults[i] = {
                ...prod,
                amazondotde: {
                  link: prodde.link,
                  price: prodde.buybox_winner.price,
                },
              };
            }
          });
        });

        res.data.search_results.map((prod, i) => {
          itResults?.map((prodit) => {
            if (prod.asin === prodit.asin) {
              ukResults[i] = {
                ...prod,
                amazondotit: {
                  link: prodit.link,
                  price: prodit.buybox_winner.price,
                },
              };
            }
          });
        });

        res.data.search_results.map((prod, i) => {
          esResults.map((prodes) => {
            if (prod.asin === prodes.asin) {
              ukResults[i] = {
                ...prod,
                amazondotes: {
                  link: prodes.link,
                  price: prodes.buybox_winner.price,
                },
              };
            }
          });
        });
      }
      console.log(ukResults, "i am newArr");
      return ukResults;
    });

    const finalResults = await Promise.all(promises);
    console.log(finalResults);
    return finalResults[asinsLength - 1];
  };

  // const getAmazondotuk = async () => {
  //   const params = {
  //     api_key: apiKey,
  //     type: "search",
  //     amazon_domain: "amazon.co.uk",
  //     search_term: searchValue,
  //     sort_by: "price_high_to_low",
  //   };

  //   let res = await axios.get("https://api.rainforestapi.com/request", {
  //     params,
  //   });

  //   console.log(res.data);
  //   res.data.search_results.map((res) => {
  //     asins.push(res.asin);
  //   });

  //   console.log(asins);

  //   let frResults;
  //   let deResults, itResults, plResults, seResults, esResults, nlResults;
  //   let ukResults = res.data.search_results;
  //   let newArr = [];
  //   let asinsLength = asins.length;

  //   let finalResults = await asins.map(async (asin, i) => {
  //     let frResults = await getAmazondotfr(asin);

  //     let deResults = await getAmazondotde(asin);

  //     let itResults = await getAmazondotit(asin);

  //     let plResults = await getAmazondotpl(asin);

  //     let seResults = await getAmazondotse(asin);

  //     let esResults = await getAmazondotes(asin);

  //     let nlResults = await getAmazondotnl(asin);

  //     ukResults[i] = {
  //       ...ukResults[i],
  //       amazondotfr: {
  //         link: frResults ? frResults.link : "Not Availible",
  //         price: frResults ? frResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotde: {
  //         link: deResults ? deResults.link : "Not Availible",
  //         price: deResults ? deResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotit: {
  //         link: itResults ? itResults.link : "Not Availible",
  //         price: itResults ? itResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotpl: {
  //         link: plResults ? plResults.link : "Not Availible",
  //         price: plResults ? plResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotse: {
  //         link: seResults ? seResults.link : "Not Availible",
  //         price: seResults ? seResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotes: {
  //         link: esResults ? esResults.link : "Not Availible",
  //         price: esResults ? esResults.buybox_winner.price : "Not Availible",
  //       },
  //       amazondotnl: {
  //         link: nlResults ? nlResults.link : "Not Availible",
  //         price: nlResults ? nlResults.buybox_winner.price : "Not Availible",
  //       },
  //     };

  //     console.log(ukResults);
  //   });
  // };

  const getAmazondotfr = async (asin) => {
    const params = {
      api_key: apiKey,
      type: "product",
      asin: asin,
      amazon_domain: "amazon.fr",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        amazondotfr.push(res.data.product);
        // return res.data.product;
      }
    }
    return amazondotfr;
  };

  const getAmazondotde = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.de",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });
    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        amazondotde.push(res.data.product);
        // return res.data.product;
      }
    }

    return amazondotde;
  };

  const getAmazondotit = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.it",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        amazondotit.push(res.data.product);
        // return res.data.product;
      }
    }
    return amazondotit;
  };

  const getAmazondotpl = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.pl",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        // amazondotpl.push(res.data.product);
        return res.data.product;
      }
    }

    // return amazondotpl;
  };

  const getAmazondotes = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.es",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        amazondotes.push(res.data.product);
        // return res.data.product;
      }
    }

    return amazondotes;
  };

  const getAmazondotse = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.se",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        // amazondotse.push(res.data.product);
        return res.data.product;
      }
    }
    // return amazondotse;
  };

  const getAmazondotnl = async (asin) => {
    const params = {
      api_key: apiKey,
      // type: "search",
      type: "product",
      asin: asin,
      amazon_domain: "amazon.nl",
      // search_term: searchValue,
      // sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    if (res.data.request_info.success === true) {
      if (res.data.product.buybox_winner.price) {
        // amazondotnl.push(res.data.product);
        return res.data.product;
      }
    }
    // return amazondotnl;
  };

  let amazondotuk = await getAmazondotuk();
  console.log(asins, "amazondotuk values");

  return {
    amazondotuk,
    page: page,
  };
};

export { getBestSellers, getSearch };
