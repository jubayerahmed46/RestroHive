import FoodItemCard from "../../../components/FoodItemCard";
import Heading from "../../../components/Heading";

const foods = [
  {
    _id: "642c155b2c4774f05c36eeaa",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "salad",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "drinks",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee7c",
    name: "Escalope de Veau",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
    category: "popular",
    price: 14.5,
  },
];

function OurBestFood() {
  return (
    <div>
      <Heading title={"CheckOut Our Best Foods"} smallTitle={"Should Try"} />
      <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
        {foods.map((food, i) => (
          <FoodItemCard key={i} food={food} />
        ))}
      </div>
    </div>
  );
}

export default OurBestFood;
