import Banner from "./banner/Banner";
import ChefCervice from "./chef-service/ChefService";
import OurMenu from "./from-our-menu/OurMenu";
import OrderOnline from "./orderInOnline/OrderOnline";
import OurBestFood from "./our-best-food/OurBestFood";
import OurBlogs from "./our-blogs/OurBlogs";
import PhoneNumber from "./phone/PhoneNumber";
import Testimonial from "./testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <OrderOnline />
      <ChefCervice />
      <OurMenu />
      <PhoneNumber />
      <OurBestFood />
      <OurBlogs />
      <Testimonial />
    </div>
  );
}

export default Home;
