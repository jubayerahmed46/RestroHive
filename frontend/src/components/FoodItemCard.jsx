import useAuth from "../hooks/useAuth";
import useUnAuthorizedCart from "../hooks/useUnAuthorizedCart";
import { getData } from "../utils/localCartItems";
import Button1 from "./Button1";

function FoodItemCard({ food }) {
  const { user } = useAuth();
  const { handleUpdate } = useUnAuthorizedCart();
  const handleAddToCart = () => {
    if (!user) {
      handleUpdate(food._id);
    }
    console.log("data is ", typeof getData());
    console.log(food.name);
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
          <Button1
            onClick={handleAddToCart}
            className=" mt-4
          bg-slate-500/85  hover:border-t-0 border-yellow-400  hover:bg-gray-900 
          hover:border-gray-900 text-yellow-300"
          >
            add to cart
          </Button1>
        </div>
      </div>
    </div>
  );
}

export default FoodItemCard;
