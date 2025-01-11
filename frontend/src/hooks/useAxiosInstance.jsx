import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

function useAxiosInstance() {
  const logoutUser = useAuth();
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      (req) => {
        req.headers.authorization = localStorage.getItem("access-token");
        return req;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          logoutUser?.logoutUser();
        }
        return Promise.reject(err);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [logoutUser]);

  return instance;
}

export default useAxiosInstance;
