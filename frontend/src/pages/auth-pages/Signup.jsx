import { useForm } from "react-hook-form";
import signInImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router";
import { PiGithubLogoBold, PiGoogleLogoBold } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Loader } from "rsuite";
import { useState } from "react";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signUpWithEmailAndPassword } = useAuth();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (data) => {
    setLoader(true);
    console.log(data);
    signUpWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        return updateProfile(res.user, { displayName: data.name });
      })
      .then(() => {
        console.log("signup successful!");
        setLoader(false);
        reset();
        navigate("/");
        toast.success("Signup Successful!");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  return (
    <div className="p-10 md:px-20">
      <div className="flex md:flex-row-reverse flex-col justify-center items-center  rounded-md sm:shadow-auth-page md:py-10 py-16 md:px-20 px-3 gap-5">
        <div className="flex justify-center items-center md:w-7/12 w-10/12">
          <img src={signInImg} alt="" className=" h-full " />
        </div>
        <div className="xl:w-4/12 lg:w-7/12 sm:w-10/12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              SignUp
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="mx-auto mt-4  sm:mt-5 "
          >
            <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    {...register("name")}
                    type="text"
                    required
                    placeholder="full name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    {...register("password", {
                      minLength: 6,
                      maxLength: 12,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%])(?=.*[0-9])/,
                    })}
                    type="password"
                    placeholder="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                <div className="text-error">
                  <p>
                    {errors.password?.type === "minLength" &&
                      "the password must be 6 character"}{" "}
                  </p>
                  <p>
                    {errors.password?.type === "maxLength" &&
                      "the password not be 12 or more character"}{" "}
                  </p>
                  <p>
                    {errors.password?.type === "pattern" &&
                      "the password must be at least one uppercase, lowecase, disit, and a special charecter! "}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm  text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                {loader ? <Loader /> : "Signup"}
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 items-center flex-col">
            <p className="text-lg">
              Already have an account ?
              <Link to={"/auth/signin"}>
                <span className="font-semibold hover:underline transition-all">
                  Go to login
                </span>
              </Link>
            </p>
            <p className="text-base mb-2">or sign up with</p>
            <div className="flex gap-3 text-3xl *:border-2 *:border-black *:rounded-full *:p-1 *:cursor-pointer">
              <TiSocialFacebook />
              <button className="text-orange-600 text-xl">
                <PiGoogleLogoBold />
              </button>
              <PiGithubLogoBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
