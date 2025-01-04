import { createContext, useState } from "react";
import { getData, setData } from "../utils/localCartItems";

const UnAuthorizedCartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getData().length);

  const handleUpdate = (id) => {
    console.log("update");
    setData(id);
    setCart(getData().length);
  };
  return (
    <UnAuthorizedCartContext.Provider value={{ cart, handleUpdate }}>
      {children}
    </UnAuthorizedCartContext.Provider>
  );
};

export { UnAuthorizedCartContext, CartProvider };
