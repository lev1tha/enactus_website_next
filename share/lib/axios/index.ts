import axios from "axios";

export const $api = axios.create({
  baseURL: "https://enactus-back.prolabagency.com/api/v1/",
});
