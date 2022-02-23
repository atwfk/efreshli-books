import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "app-id": process.env.NEXT_PUBLIC_APP_ID as string,
  },
});
