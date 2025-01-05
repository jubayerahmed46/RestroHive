import PageBanner from "../../../components/PageBanner";
import menuImg from "../../../assets/menu/banner3.jpg";

function Banner() {
  return (
    <div>
      <PageBanner
        img={menuImg}
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      />
    </div>
  );
}

export default Banner;
