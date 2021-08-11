import axios from "axios";
// let apiKey = "F54C31E20DAD40ECA16CCE58B5A46F42";

const getApiKey = async (data) => {
  let response;
  response = await axios.get(`http://localhost:3001/api/apikey/`);

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
  const { searchValue } = data;
  let apiKey = await getApiKey();

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

  const getAmazondotca = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.ca",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotfr = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.fr",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotde = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.de",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotit = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.it",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotpl = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.pl",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotes = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.es",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotse = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.se",
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
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  const getAmazondotnl = async () => {
    const params = {
      api_key: apiKey,
      type: "search",
      amazon_domain: "amazon.nl",
      search_term: searchValue,
      sort_by: "price_high_to_low",
    };

    let res = await axios.get("https://api.rainforestapi.com/request", {
      params,
    });

    console.log(res.data);
    return res.data.search_results;
  };

  let amazondotcom = await getAmazondotcom();
  // let amazondotca = await getAmazondotca();
  let amazondotfr = await getAmazondotfr();
  let amazondotde = await getAmazondotde();
  let amazondotit = await getAmazondotit();
  let amazondotpl = await getAmazondotpl();
  let amazondotes = await getAmazondotes();
  let amazondotse = await getAmazondotse();
  let amazondotuk = await getAmazondotuk();
  let amazondotnl = await getAmazondotnl();
  // let amazondotau = await getAmazondotau();

  return {
    amazondotcom,
    amazondotuk,
    amazondotnl,
    // amazondotca,
    amazondotde,
    amazondotes,
    amazondotfr,
    amazondotit,
    amazondotpl,
    amazondotse,
  };
};

export { getBestSellers, getSearch };
