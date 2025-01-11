import { FaListOl, FaUsers } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import CommonRoutes from "./CommonRoutes";

function AdminAccess() {
  const routes = [
    { name: "admin home", icon: <IoHomeSharp />, path: "admin-home" },
    { name: "users", icon: <FaUsers />, path: "users" },
    { name: "Manage Items", icon: <FaListOl />, path: "manage-items" },
  ];
  return (
    <>
      {routes.map((route) => (
        <NavLink
          key={route.name}
          className={({ isActive }) =>
            `${
              isActive
                ? "font-semibold bg-white text-black px-1 py-1 rounded-md"
                : ""
            } text-black hover:bg-white px-1 py-1 rounded-md hover:text-black hover:no-underline transition-all uppercase flex  focus:no-underline focus:text-black gap-2 text-xs md:text-sm items-center`
          }
          to={route.path}
        >
          <span>{route.icon}</span> {route.name}
        </NavLink>
      ))}
      <CommonRoutes />
    </>
  );
}

export default AdminAccess;
