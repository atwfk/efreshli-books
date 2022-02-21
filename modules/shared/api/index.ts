import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
});
