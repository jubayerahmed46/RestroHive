import Banner from "./banner/Banner";
import ChefCervice from "./chef-service/ChefService";
import OurMenu from "./from-our-menu/OurMenu";
import OrderOnline from "./orderInOnline/OrderOnline";
import PhoneNumber from "./phone/PhoneNumber";

function Home() {
  return (
    <div>
      <Banner />
      <OrderOnline />
      <ChefCervice />
      <OurMenu />
      <PhoneNumber />
    </div>
  );
}

export default Home;
