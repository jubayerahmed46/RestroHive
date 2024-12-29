import chefServiceImage from "../../../assets/home/chef-service.jpg";

function ChefCervice() {
  return (
    <div
      className="xl:h-[450px] md:h-[400px] h-[360px] my-8 w-full bg-cover flex justify-center items-center bg-center bg-fixed  "
      style={{ backgroundImage: `url(${chefServiceImage})` }}
    >
      <div className="bg-white md:p-16 p-8 flex justify-center flex-col items-center text-center rounded-md  md:w-10/12 w-11/12   shadow-sm ">
        <h2 className="text-3xl mb-3">Restro Hive</h2>
        <p>
          Efficiently build intuitive convergence whereas pandemic action items.
          Quickly communicate web-enabled collaboration and idea-sharing with
          enterprise-wide innovation. Monotonectally re-engineer reliable web
          services.
        </p>
      </div>
    </div>
  );
}

export default ChefCervice;
