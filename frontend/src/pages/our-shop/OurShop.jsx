import shop from "../../assets/shop/banner2.jpg";
import PageBanner from "../../components/PageBanner";
import ShopCategories from "./ShopCategories";

function OurShop() {
  return (
    <div>
      <PageBanner
        img={shop}
        title={"our shop"}
        desc={"Would you like to try a dish?"}
      />
      <ShopCategories />
    </div>
  );
}

export default OurShop;
