import { Outlet } from "react-router";
import auth_bg from "../assets/reservation/auth_bg.png";
import { Toaster } from "react-hot-toast";

function AuthLayout() {
  return (
    <div
      className={`min-h-screen w-full object-cover  bg-[length:120%] flex justify-center flex-col items-center`}
      style={{ backgroundImage: `url(${auth_bg})` }}
    >
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default AuthLayout;
