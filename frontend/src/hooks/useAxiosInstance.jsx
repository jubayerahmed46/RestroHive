import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
function useAxiosInstance() {
  useEffect(() => {
    axios.interceptors.response.use(
      (config) => config,
      (err) => {
        return Promise.reject(err);
      }
    );
  }, []);
  return instance;
}

export default useAxiosInstance;
