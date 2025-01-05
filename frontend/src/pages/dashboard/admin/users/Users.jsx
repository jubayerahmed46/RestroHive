import Heading from "../../../../components/Heading";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";

function Users() {
  const { user } = useAuth();
  const axiosSecure = useAxiosInstance();
  const { data: users, isLoading } = useQuery({
    queryKey: [user?.email, "users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  if (isLoading) return;

  return (
    <div>
      <Heading smallTitle={"manage users"} title={"All User"} />

      <div className="overflow-x-auto  bg-slate-100 lg:w-10/12 mx-auto rounded-md p-8">
        <table className="table   ">
          {/* head */}
          <thead className="bg-[#D1A054] rounded-full  text-white/90 ">
            <tr className="font-light uppercase rounded-full">
              <th></th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                className="border-1 border-yellow-500 border-t-0"
                key={user._id}
              >
                <th> {i + 1} </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12"></div>
                  </div>
                </td>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td className="flex text-xl gap-5 justify-center items-center h-full mt-4">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
