import axios from "axios";

export const clientAPI = axios.create({
  baseURL: "https://lotsmojotest.herokuapp.com/",
});
