import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { headers } = config;
    headers!["app-id"] = process.env.NEXT_PUBLIC_APP_ID ?? "";
    return config;
  },
  async (e: Error) => Promise.reject(e),
);
