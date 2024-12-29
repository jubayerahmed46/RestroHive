/* eslint-disable react/prop-types */
function Heading({ smallTitle, title }) {
  return (
    <div className="flex flex-col justify-center my-6 items-center">
      <p className="text-orange-400 italic">--- {smallTitle} ---</p>{" "}
      {/** From 11:00am to 10:00pm */}
      <span className="h-0.5 md:w-72 w-56 bg-gray-200 rounded-xl my-2 block"></span>
      <h2 className="text-2xl">{title}</h2> {/** ORDER ONLINE */}
      <span className="h-0.5 md:w-72 w-56 bg-gray-200 rounded-xl my-2  block"></span>
    </div>
  );
}

export default Heading;
