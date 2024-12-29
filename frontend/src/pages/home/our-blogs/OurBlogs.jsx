import Button1 from "../../../components/Button1";
import Heading from "../../../components/Heading";
import chefServiceImage from "../../../assets/home/featured.jpg";

function OurBlogs() {
  return (
    <div
      className=" text-white my-20 w-full bg-cover  bg-center bg-fixed  "
      style={{ backgroundImage: `url(${chefServiceImage})` }}
    >
      <div className="pt-14 pb-24 bg-black/60 px-6 ">
        <Heading title={"Our Blogs"} smallTitle={"Check it out"} />
        <div className="flex  gap-4 md:flex-row flex-col px-10">
          <img
            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"
            alt=""
          />
          <div>
            <h4 className="text-lg">March 20, 2023</h4>
            <h2 className="text-xl uppercase my-2">where can i get some?</h2>
            <p>
              Interactively parallel task fully tested infrastructures through
              equity invested partnerships. Collaboratively extend optimal ideas
              without functional processes. Dynamically redefine cross
              functional testing procedures and.
            </p>
            <Button1 className=" border-white mt-3 hover:border-t-0 hover:bg-white hover:text-black">
              read more
            </Button1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBlogs;
