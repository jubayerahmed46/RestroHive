import Heading from "../../../../components/Heading";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import Spinner from "../../../../features/Spinner";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

function Users() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosInstance();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "users"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data;
    },
  });

  const handleUpdateRole = async (e, userId) => {
    try {
      const { data } = await axiosSecure.patch(`/users/user/role/${userId}`, {
        role: e.target.value,
      });
      if (data.modifiedCount) {
        toast.success("Role update successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Heading smallTitle={"manage users"} title={"All User"} />

      <div className="overflow-x-auto  bg-slate-100 lg:w-10/12 mx-auto rounded-md p-8">
        <table className="table   ">
          {/* head */}
          <thead className="bg-[#D1A054] rounded-full  text-white/90 ">
            <tr className="font-light uppercase rounded-full">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                className="border-1 border-yellow-500 border-t-0"
                key={user._id}
              >
                <td> {i + 1} </td>

                <td>{user.name} </td>
                <td>{user.email}</td>
                <td className="flex text-xl gap-5 justify-center items-center h-full mt-4">
                  <select
                    defaultValue={user.role}
                    onChange={(e) => handleUpdateRole(e, user._id)}
                  >
                    <option value="admin">admin</option>
                    <option value="customer">customer</option>
                    <option value="manager">manager</option>
                  </select>
                </td>
                <td>
                  {" "}
                  <FaTrash />{" "}
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
