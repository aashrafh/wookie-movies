import axios from "axios";

const baseURL = "https://wookie.codesubmit.io";

const headers = {
  common: {
    Authorization: `Bearer Wookie2019`,
  },
};

const api = axios.create({
  baseURL: baseURL,
  timeout: 0,
  headers: headers,
});

api.interceptors.response.use(undefined, (err) => {
  if (!err.response || err.response?.status !== 200) {
    throw Error("Failed to communicate with the API. Please, try again.");
  }
  throw err.response;
});

export { api };
