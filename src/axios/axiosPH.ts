import axios from "axios";

const instance = axios.create({
  baseURL: "https://run.mocky.io/v3/a1c086de-b947-4f22-85ec-2cf3b2aae6fd",
  params: {},
});

export default instance;
