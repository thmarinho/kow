import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://kow-api.thmarinho.dev",
  headers: {
    Authorization: `Bearer ${Object.fromEntries(document.cookie.split('; ').map(e => e.split('='))).Authorization}`
  }
});

axiosInstance.interceptors.response.use(
  (success) => {
    return success;
  },
  (error) => {
    toast.error(`Une erreur est survenur (err. ${error.status})`)
  }
);

export default axiosInstance;
