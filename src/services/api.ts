import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  params: {
    ts: process.env.EXPO_PUBLIC_TS,
    apikey: process.env.EXPO_PUBLIC_APIKEY,
    hash: process.env.EXPO_PUBLIC_HASH,
  },
});
