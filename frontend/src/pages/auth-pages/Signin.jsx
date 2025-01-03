import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import signInImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router";
import { PiGithubLogoBold, PiGoogleLogoBold } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import useAuth from "../../hooks/useAuth";
import { Loader } from "rsuite";
import toast from "react-hot-toast";

function Signin() {
  const reCaptchaRef = useRef();
  const { register, handleSubmit, reset } = useForm();
  const { signInWithEmailandPass } = useAuth();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSignin = (data) => {
    console.log(data);
    const key = reCaptchaRef.current.getValue();
    if (!key) {
      console.log(key);
      setErr("You may be robot!");
      return;
    }
    console.log(key);

    setLoader(true);
    signInWithEmailandPass(data.email, data.password)
      .then(() => {
        console.log("signin successful!");
        setLoader(false);
        reset();
        // navigate("/");
        toast.success("Signin Successful!");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  return (
    <div className="p-10 md:px-20">
      <div className="flex md:flex-row flex-col justify-center items-center  rounded-md sm:shadow-auth-page md:py-10 py-16 md:px-20 px-3 gap-5">
        <div className="flex justify-center items-center md:w-7/12 w-10/12">
          <img src={signInImg} alt="" className="h-full" />
        </div>
        <div className="xl:w-4/12 lg:w-7/12 sm:w-10/12">
          <div className=" text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              SignIn
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(handleSignin)}
            className="mx-auto mt-4  sm:mt-5 "
          >
            <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2">
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
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-full ">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_site_key}
                  ref={reCaptchaRef}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-error">{err} </p>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loader ? <Loader /> : "Signin"}
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 items-center flex-col">
            <p className="text-lg">
              New hare ?{" "}
              <Link to={"/auth/signup"}>
                <span className="font-semibold hover:underline transition-all">
                  Create a New Account
                </span>
              </Link>
            </p>
            <p className="text-base mb-2">or sign in with</p>
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

export default Signin;
