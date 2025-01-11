import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosInstance from "./useAxiosInstance";

function useRole() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosInstance();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/user/role/${user?.email}`);

      return data;
    },
  });
  return { role: role?.role, isLoading };
}

export default useRole;
