import FoodItemCard from "../../../components/FoodItemCard";

function ShopCategoriesItems({ menus, tabs, value, CustomTabPanel }) {
  return (
    <div className="min-h-[900px]">
      {tabs.map((_, i) => (
        <CustomTabPanel key={i} value={value} index={i}>
          <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
            {menus.map((item, i) => (
              <FoodItemCard key={i} food={item} />
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </div>
  );
}

export default ShopCategoriesItems;
