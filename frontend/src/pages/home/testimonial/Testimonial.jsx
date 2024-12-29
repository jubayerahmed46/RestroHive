import Heading from "../../../components/Heading";
import Reviews from "./Reviws";

export default function Testimonial() {
  return (
    <>
      <div>
        <Heading title={"testimonials"} smallTitle={"What Our Clients Says"} />
        <Reviews />
      </div>
    </>
  );
}
