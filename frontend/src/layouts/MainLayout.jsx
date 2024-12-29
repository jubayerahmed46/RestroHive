import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto xl:px-0 md:px-8 px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
