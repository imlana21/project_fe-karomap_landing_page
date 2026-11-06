import axios from "axios";

const api = axios.create({
  baseURL: "https://www.karomap.com/backend/",
  timeout: 15000,
});

export default api;
