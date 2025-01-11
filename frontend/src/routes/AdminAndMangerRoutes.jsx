import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../features/Spinner";
import useRole from "../hooks/useRole";

function AdminAndMangerRoutes() {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return <Spinner />;
  }

  if (role === "admin" || role === "manager") {
    return <Outlet />;
  }
  return <Navigate to={"/dashboard/profile"} />;
}

export default AdminAndMangerRoutes;
