import axios from "axios";
// let url = "http://localhost:3001";
let url = "https://amztownbackend.herokuapp.com";

const signin = async (data) => {
  console.log(data);
  let response;
  response = await axios.post(`${url}/api/users/login`, data);

  //   console.log(response);
  return response;
};

const signup = async (data) => {
  let response;
  response = await axios.post(`${url}/api/users/register`, data);

  //   console.log(response);
  return response;
};

const getCodes = async (data) => {
  let response;
  response = await axios.get(`${url}/api/affiliate/`);

  console.log(response);
  return response;
};

export { signin, signup, getCodes };
