import { IoHomeSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaShopify, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useRole from "../../../hooks/useRole";
import AdminAccess from "./routeAccess/AdminAccess";
import ManagerAccess from "./routeAccess/ManagerAccess";
import CustomerAccess from "./routeAccess/CustomerAccess";

function Sidebar() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const { role } = useRole();

  const defaultRoutes = [
    { name: "home", icon: <IoHomeSharp />, path: "/" },
    { name: "menu", icon: <IoMenu />, path: "/shop" },
    { name: "shop", icon: <FaShopify />, path: "/menu" },
    { name: "contact", icon: <MdOutlineMail />, path: "/contact" },
  ];

  const handleLogout = () => {
    const logginOut = (id) => {
      toast.promise(logoutUser(), {
        loading: "Processing...",
        success: <b>Logout Successfull!</b>,
        error: <b>Logout failed.</b>,
      });
      toast.dismiss(id);
      navigate("/");
    };

    toast((t) => (
      <span>
        Are you <b>sure</b>?
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-gray-400 px-3 py-1 rounded-md shadow-inner mx-3 text-white"
        >
          no
        </button>
        <button
          onClick={() => logginOut(t.id)}
          className="bg-orange-400 px-3 py-1 rounded-md shadow-inner  text-white"
        >
          yes
        </button>
      </span>
    ));
  };
  return (
    <div className="bg-[#D1A054] py-5 px-3 h-full ">
      <div>
        <img src="/logo.png" className="w-10/12 brightness-0 " alt="" />
      </div>
      <ul className="mt-8 flex flex-col gap-3 border-b-2 pb-4">
        {role === "admin" ? (
          <AdminAccess />
        ) : role === "manager" ? (
          <ManagerAccess />
        ) : (
          <CustomerAccess />
        )}
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
      <div className="flex   mt-10 w-full flex-col">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "font-semibold bg-white text-black px-1 py-1 rounded-md"
                : ""
            } text-black hover:bg-white w-full px-1 py-1 rounded-md hover:text-black hover:no-underline transition-all uppercase flex  gap-2 text-xs md:text-sm items-center`
          }
          to={"profile"}
        >
          <span>{<FaUser />}</span> Profile
        </NavLink>
        <button
          className="w-full py-1 rounded-sm bg-slate-300 mt-2 flex items-center justify-center gap-2"
          onClick={handleLogout}
        >
          Logout <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
