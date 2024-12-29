import Button1 from "./Button1";

/* eslint-disable react/prop-types */

function FoodItemCard({ food }) {
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
