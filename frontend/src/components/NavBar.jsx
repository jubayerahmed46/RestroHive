import { NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import DynamicTitles from "../features/DynamicTitles";
import cartIcon from "../assets/icon/cart.png";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutUser } = useAuth();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/shop", label: "Our Shop" },
  ];

  const renderLinks = (className = "") =>
    navLinks.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          `${className} ${
            isActive
              ? "text-yellow-300 focus:text-yellow-300 focus:no-underline hover:no-underline font-normal"
              : "hover:text-yellow-400 no-underline text-white"
          }`
        }
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </NavLink>
    ));

  const handleLogout = () => {
    console.log("trigered");
    const logginOut = (id) => {
      toast.promise(logoutUser(), {
        loading: "Processing...",
        success: <b>Logout Successfull!</b>,
        error: <b>Logout failed.</b>,
      });
      toast.dismiss(id);
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
    <nav className="bg-black text-white md:px-6 px-3 py-3 bg-opacity-70 fixed w-full z-30">
      <DynamicTitles />
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" className="md:h-11 h-8 w-full" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-extralight">
          {renderLinks()}
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="cursor-pointer hover:text-yellow-400 bg-black/60 text-white px-5 py-1 rounded-md"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/auth/signin"
                className="active:scale-90 hover:scale-95 transition-all bg-black/60 text-white px-5 py-1 rounded-md hover:text-white hover:no-underline"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/cart" className="relative hover:text-yellow-400">
            <img src={cartIcon} className="h-8" alt="Cart" />
          </NavLink>
          <NavLink to="/profile" className="hover:text-yellow-400">
            <FaUserCircle size={20} />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden transition-all"
        >
          {isMenuOpen ? (
            <MdClose className="text-xl" />
          ) : (
            <div className="space-y-1">
              <span className="block w-5 h-[1.5px] bg-white"></span>
              <span className="block w-5 h-[1.5px] bg-white"></span>
              <span className="block w-5 h-[1.5px] bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {renderLinks("block")}
          <div className="flex space-x-6 mt-3">
            <NavLink to="/cart" className="relative hover:text-yellow-400">
              <AiOutlineShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                1
              </span>
            </NavLink>
            <NavLink to="/profile" className="hover:text-yellow-400">
              <FaUserCircle size={20} />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
