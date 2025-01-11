import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import useAuth from "../hooks/useAuth";
import Spinner from "../features/Spinner";

function MainLayout() {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto xl:px-0 md:px-8 px-4 min-h-80">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
