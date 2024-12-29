import Heading from "../../../components/Heading";
import Slider from "./Slider";

function OrderOnline() {
  return (
    <div className="py-10">
      <Heading title={"ORDER ONLINE"} smallTitle={"From 11:00am to 10:00pm"} />
      <Slider />
    </div>
  );
}

export default OrderOnline;
