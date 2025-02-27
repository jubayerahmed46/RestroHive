import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import useAuth from "./useAuth";

function useAuthorizedUserCart(props) {
  const axiosInstane = useAxiosInstance();
  const { user } = useAuth();
  const { data = [], refetch } = useQuery({
    queryKey: ["cartItems", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstane.get(
        `/cart-items?email=${user.email}&withFoodData=${props?.withFoodData}`
      );
      return data;
    },
  });

  return { data, refetch };
}

export default useAuthorizedUserCart;
