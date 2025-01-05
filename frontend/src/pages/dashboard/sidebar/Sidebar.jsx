import { IoHomeSharp } from "react-icons/io5";
import { MdRestaurant } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router";

function Sidebar() {
  const dashboardRouts = [
    { name: "admin home", icon: <IoHomeSharp />, path: "admin-home" },
    { name: "add items", icon: <MdRestaurant />, path: "add-items" },
    {
      name: "manage items",
      icon: <FaListUl />,
      path: "manage-cart-items",
    },
    { name: "manage bookings", icon: <FaBook />, path: "manage-bookings" },
    { name: "users", icon: <FaUsers />, path: "users" },
  ];
  const defaultRoutes = [
    { name: "home", icon: <IoHomeSharp />, path: "/" },
    { name: "menu", icon: <IoMenu />, path: "/shop" },
    { name: "shop", icon: <FaShopify />, path: "/menu" },
    { name: "contact", icon: <MdOutlineMail />, path: "/contact" },
  ];
  return (
    <div className="bg-[#D1A054] py-5 px-3 h-full ">
      <div>
        <img src="/logo.png" className="w-10/12 brightness-0 " alt="" />
      </div>
      <ul className="mt-8 flex flex-col gap-3 border-b-2 pb-4">
        {dashboardRouts.map((route) => (
          <li key={route.name}>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold bg-white text-black px-1 py-1 rounded-md"
                    : ""
                } text-black hover:bg-white px-1 py-1 rounded-md hover:text-black hover:no-underline transition-all uppercase flex  gap-2 text-xs md:text-sm items-center`
              }
              to={route.path}
            >
              <span>{route.icon}</span> {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className=" mt-5 flex flex-col gap-3 ">
        {defaultRoutes.map((route) => (
          <li key={route.name}>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold bg-white text-black px-1 py-1 rounded-md"
                    : ""
                } text-black hover:bg-white px-1 py-1 rounded-md hover:text-black hover:no-underline transition-all uppercase flex  gap-2 text-xs md:text-sm items-center`
              }
              to={route.path}
            >
              <span>{route.icon}</span> {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
