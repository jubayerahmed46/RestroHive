import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
function useAxiosInstance() {
  return instance;
}

export default useAxiosInstance;
