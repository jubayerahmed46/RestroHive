import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../features/Spinner";
import useRole from "../hooks/useRole";

function AdminRoutes() {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return <Spinner />;
  }

  if (role === "admin") {
    return <Outlet />;
  }
  return <Navigate to={"/dashboard/profile"} />;
}

export default AdminRoutes;
