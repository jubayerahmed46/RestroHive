import useAuth from "./useAuth";
import useAxiosInstance from "./useAxiosInstance";
import { useQuery } from "@tanstack/react-query";

function useUser() {
  const { user } = useAuth();
  const axiosSecure = useAxiosInstance();
  const { data, isLoading } = useQuery({
    queryKey: [user?.email, "user"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/user/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  return { data, isLoading };
}

export default useUser;
