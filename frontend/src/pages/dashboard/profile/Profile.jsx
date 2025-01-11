import useUser from "../../../hooks/useUser";

function Profile() {
  const { data, isLoading } = useUser();
  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img className="w-32 h-32 rounded-full mx-auto" src={data.image} />
      <h2 className="text-center text-2xl font-semibold mt-3">{data.name}</h2>
      <p className="text-center text-xl uppercase rounded-md mt-1 w-24 mx-auto bg-orange-500 py-2 my-2 text-white">
        {" "}
        {data.role}
      </p>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          Twitter
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          LinkedIn
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          GitHub
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">
          {`${data.name} is a ${data.role} of restro hive`}
        </p>
      </div>
    </div>
  );
}

export default Profile;
