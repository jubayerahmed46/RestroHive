/**
 * Steps to create public axios instance
 *
 * 1. import axios and declare a method called "axios.create()"
 * 2. it takes a object. define a prop of baseURL and paste server url link
 * 3. create a function for return the instance
 * 4. note: we should not need to implement axios interceptor becouas its not privet route
 * 5. thats it export and user others public routes
 * */
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

function useAxiosPublic() {
  return instance;
}

export default useAxiosPublic;
