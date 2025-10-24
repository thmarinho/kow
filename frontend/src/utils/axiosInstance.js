import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://kow-api.thmarinho.dev",
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
