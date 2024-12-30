import { NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import DynamicTitles from "../features/DynamicTitles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white md:px-6 px-3 py-3 bg-opacity-60 fixed w-full z-30">
      <DynamicTitles />
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" className="md:h-11 h-8 w-full" alt="" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-extralight">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400  font-normal"
                : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-normal" : "hover:text-yellow-400"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-normal" : "hover:text-yellow-400"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-normal" : "hover:text-yellow-400"
            }
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-normal" : "hover:text-yellow-400"
            }
          >
            Our Shop
          </NavLink>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden transition-all duration-150"
        >
          {!isMenuOpen ? (
            <div className="space-y-1">
              <span className="block w-5 h-[1.5px] bg-white"></span>
              <span className="block w-5 h-[1.5px] bg-white"></span>
              <span className="block w-5 h-[1.5px] bg-white"></span>
            </div>
          ) : (
            <MdClose className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-yellow-400 font-normal"
                : "block hover:text-yellow-400"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block text-yellow-400 font-normal"
                : "block hover:text-yellow-400"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "block text-yellow-400 font-normal"
                : "block hover:text-yellow-400"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "block text-yellow-400 font-normal"
                : "block hover:text-yellow-400"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "block text-yellow-400 font-normal"
                : "block hover:text-yellow-400"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Our Shop
          </NavLink>
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
