import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRef, useState } from "react";
import { MdRestaurant } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoaderPinwheel } from "react-icons/lu";
import useAxiosInstance from "../hooks/useAxiosInstance";
import uploadImgInCloudinary, { urlReducer } from "../apis/utils";
import Heading from "./Heading";
//
export default function Example({ open, setOpen, menu, refetch }) {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosInstance();
  const imgRef = useRef(null);
  const [uplading, setUplading] = useState(false);
  const [imgUrl, setImgUrl] = useState(menu.image);

  const summittedData = async (fieldsData) => {
    try {
      setUplading(true);
      const img = imgRef.current.files[0];

      const { url: image } = !img
        ? menu.image
        : await uploadImgInCloudinary(img);

      const newMenu = {
        ...fieldsData,
        price: parseFloat(fieldsData.price),
      };

      if (image !== menu.image) {
        newMenu.image = image;
      }

      const { data } = await axiosSecure.patch(`/menus/${menu._id}`, newMenu);

      if (data.modifiedCount) {
        toast.success("Item Updated Succesfully!");
        refetch();
        setOpen(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setUplading(false);
    }
  };
  const handleImageUpload = () => {
    imgRef.current.click();
  };

  const changeHandler = () => {
    const changeImg = imgRef.current.files[0];
    if (!changeImg) return;
    setImgUrl(imgRef.current.files[0]?.name);
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto py-14">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <Heading smallTitle={"Mutate Menu Item"} title={"Update Menu"} />
            <div className="isolate bg-white px-3">
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
                      defaultValue={menu.name}
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
                        defaultValue={menu.category}
                        {...register("category")}
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
                        defaultValue={menu.price}
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
                        defaultValue={menu.recipe}
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
                      <div className=" items-center gap-3 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 flex placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                        <input
                          id="image"
                          type="file"
                          ref={imgRef}
                          className="hidden"
                          onChange={changeHandler}
                          accept="image/*"
                        />
                        <button
                          type="button"
                          className="bg-orange-400 py-1 px-4 rounded-sm text-white"
                          onClick={handleImageUpload}
                        >
                          Change Image
                        </button>
                        <p>{urlReducer(imgUrl)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  {uplading ? (
                    <div className="flex justify-center items-center  gap-2 w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orabg-orange-500">
                      <parent className="animate-spin text-xl ">
                        <LuLoaderPinwheel />
                      </parent>
                    </div>
                  ) : (
                    <button className="flex justify-center items-center  gap-2 w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orabg-orange-500">
                      Update Menu <MdRestaurant />
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
