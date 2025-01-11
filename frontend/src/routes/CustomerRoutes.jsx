import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../features/Spinner";
import useRole from "../hooks/useRole";

function CustomerRoutes() {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return <Spinner />;
  }

  if (role === "customer") {
    return <Outlet />;
  }
  return <Navigate to={"/dashboard/profile"} />;
}

export default CustomerRoutes;
