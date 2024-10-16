import axios from "axios";
import { USER_LOCAL } from "../utils/constant";

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
});

api.interceptors.request.use(
  function (config) {
    const tokenUser = JSON.parse(localStorage.getItem(USER_LOCAL.KEY)!)?.state
      ?.token;
    if (tokenUser) {
      config.headers.Authorization = `Bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
