import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";

function CustomerAccess() {
  const routes = [
    {
      name: "My Cart",
      icon: <FaShoppingCart />,
      path: "manage-cart-items",
    },
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
    </>
  );
}

export default CustomerAccess;
