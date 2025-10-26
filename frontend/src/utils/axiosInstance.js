import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://kow-api.thmarinho.dev",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Object.fromEntries(document.cookie.split('; ').map(e => e.split('='))).Authorization

    if (token)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (success) => {
    return success;
  },
  (error) => {
    toast.error(`Une erreur est survenur (err. ${error.status})`)
  }
);

export default axiosInstance;
