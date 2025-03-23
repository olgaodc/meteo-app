import axios from "axios";

const baseURL = "http://localhost:3001/";

const ApiService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default ApiService;
