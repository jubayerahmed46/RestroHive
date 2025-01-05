import Banner from "./Banner";
import Desserts from "./Desserts";
import Pizza from "./Pizza";
import Salads from "./Salads";
import Soup from "./Soup";
import TodaysOffer from "./TodaysOffer";

function Menu() {
  return (
    <div>
      <Banner />
      <TodaysOffer />
      <Desserts />
      <Pizza />
      <Salads />
      <Soup />
    </div>
  );
}

export default Menu;
