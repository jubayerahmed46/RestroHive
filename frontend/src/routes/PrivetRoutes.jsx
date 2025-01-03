import { Navigate, Outlet, useLocation } from "react-router";
import Spinner from "../features/Spinner";
import useAuth from "../hooks/useAuth";

function PrivetRoutes() {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return <Outlet />;
  }
  return <Navigate to={"/auth/signin"} state={{ from: location.pathname }} />;
}

export default PrivetRoutes;
