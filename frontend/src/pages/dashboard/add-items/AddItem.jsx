import { useRef, useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import Heading from "../../../components/Heading";
import { MdRestaurant } from "react-icons/md";
import { useForm } from "react-hook-form";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import toast from "react-hot-toast";
import { LuLoaderPinwheel } from "react-icons/lu";
import uploadImgInCloudinary from "../../../apis/utils";

export default function AddItem() {
  const [agreed, setAgreed] = useState(false);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosInstance();
  const imgRef = useRef(null);
  const [uplading, setUplading] = useState(false);

  const summittedData = async (fieldsData) => {
    try {
      setUplading(true);
      const img = imgRef.current.files[0];

      const { url: image } = await uploadImgInCloudinary(img);

      const newMenu = {
        ...fieldsData,
        image,
        price: parseFloat(fieldsData.price),
      };

      const { data } = await axiosSecure.post(`/menus`, newMenu);
      console.log(data);
      if (data.acknowledged) {
        toast.success("Item Added Succesfully!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setUplading(false);
    }
  };
  // deollyroq <- cloud name
  const handleImageUpload = () => {
    imgRef.current.click();
  };

  return (
    <div className="isolate bg-white px-6 py-16 lg:px-8">
      <Heading smallTitle={"What's new"} title={"ADD AN ITEM"} />
      <form
        onSubmit={handleSubmit(summittedData)}
        className="mx-auto mt-16 max-w-xl sm:mt-20 bg-slate-100 p-8 rounded-md"
      >
        <div className="sm:col-span-2 mb-4">
          <label
            htmlFor="name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Recipe Name
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              {...register("name")}
              type="text"
              autoComplete="organization"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="category"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Category
            </label>
            <div className="mt-2.5">
              <select
                {...register("category")}
                defaultValue={"dessert"}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              >
                <option value={"dessert"}>Dessert</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"Drink"}>Drink</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              price
            </label>
            <div className="mt-2.5">
              <input
                id="price"
                {...register("price")}
                type="number"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                {...register("recipe")}
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                "
                placeholder="descripton"
                required
              />
            </div>
            <div className="mt-3">
              <div className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                <input
                  id="image"
                  type="file"
                  ref={imgRef}
                  className="hidden"
                  required
                  accept="image/*"
                />
                <button
                  type="button"
                  className="bg-orange-400 py-1 px-4 rounded-sm text-white"
                  onClick={handleImageUpload}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5" />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <button className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </button>
              .
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          {uplading ? (
            <div className="flex justify-center items-center  gap-2 w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orabg-orange-500">
              <span className="animate-spin text-xl ">
                {" "}
                <LuLoaderPinwheel />
              </span>
            </div>
          ) : (
            <button className="flex justify-center items-center  gap-2 w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orabg-orange-500">
              Add Item <MdRestaurant />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
