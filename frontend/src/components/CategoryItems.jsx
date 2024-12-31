import { Link } from "react-router";
import Button1 from "./Button1";
import MenuCard from "./MenuCard";

function CategoryItems({ items, category }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 ">
        {items?.menus.map((item) => (
          <MenuCard key={item._id} menu={item} />
        ))}
      </div>
      {category !== "popular" && (
        <div className="flex justify-center mt-8 ">
          <Link to={`/shop`} state={category}>
            <Button1 className="hover:bg-black hover:text-white">
              ORDER YOUR FAVOURITE FOOD
            </Button1>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoryItems;
