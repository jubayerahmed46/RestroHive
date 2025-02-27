import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useUnAuthorizedCart from "../hooks/useUnAuthorizedCart";
import { getData } from "../utils/localCartItems";
import Button1 from "./Button1";
import useAuthorizedUserCart from "../hooks/useAuthorizedUserCart";
import useAxiosInstance from "../hooks/useAxiosInstance";
import useRole from "../hooks/useRole";

function FoodItemCard({ food }) {
  const { user } = useAuth();
  const { handleUpdate } = useUnAuthorizedCart();
  const { refetch } = useAuthorizedUserCart();
  const { role } = useRole();
  const axiosInstance = useAxiosInstance();

  const handleAddToCart = () => {
    if (!user) {
      if (getData().includes(food._id)) {
        return toast.error("item exist!");
      }
      toast.success("item added");
      return handleUpdate(food._id);
    } else {
      const body = {
        foodId: food._id,
        userEmail: user.email,
      };
      (async function () {
        try {
          const { data } = await axiosInstance.post("/cart-items", body);

          if (data.acknowledged) {
            toast.success("item added in cart");
            refetch();
          }
        } catch (error) {
          console.log(error);
          const existError = error?.response?.data?.message;
          if (existError) {
            toast.error(existError);
          }
        }
      })();
    }
  };

  return (
    <div className="bg-slate-200">
      <img
        src={food.image}
        className="w-full object-cover brightness-90"
        alt=""
      />
      <div className="p-3">
        <h2 className="text-2xl mb-2">{food.name} </h2>
        <p>{food.recipe} </p>
        <div className="flex justify-center">
          {role === "admin" || role === "manager" ? (
            <Button1
              className=" mt-4
        bg-slate-500/85   border-yellow-400  hover:bg-gray-900 
         text-yellow-300"
            >
              Order Now
            </Button1>
          ) : (
            <Button1
              onClick={handleAddToCart}
              className=" mt-4
          bg-slate-500/85  hover:border-t-0 border-yellow-400  hover:bg-gray-900 
          hover:border-gray-900 text-yellow-300"
            >
              add to cart
            </Button1>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodItemCard;
