import axios from "axios";

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://enactus-back.prolabagency.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
