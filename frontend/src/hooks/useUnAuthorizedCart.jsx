import { useContext } from "react";
import { UnAuthorizedCartContext } from "../contexts/UnauthenticatedCartContext";

function useUnAuthorizedCart() {
  return useContext(UnAuthorizedCartContext);
}

export default useUnAuthorizedCart;
