import { Outlet } from "react-router";
import Sidebar from "../pages/dashboard/sidebar/Sidebar";

function DashBoardLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="md:col-span-2 col-span-3">
        <Sidebar />
      </div>
      <div className="md:col-span-10 col-span-9">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoardLayout;
