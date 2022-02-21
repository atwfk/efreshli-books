import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { headers } = config;
    headers!["app-id"] = "6213a59d39dc3d0667d7f3ca";
    return config;
  },
  async (e: Error) => Promise.reject(e),
);
