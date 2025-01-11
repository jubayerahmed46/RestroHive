import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@headlessui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosInstance from "../hooks/useAxiosInstance";
import UpdateMenu from "./UpdateMenu";

function MenuTableRow({ item, seriul, refetch }) {
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosInstance();

  const removeHandler = (id) => {
    const deleting = async () => {
      await axiosSecure.delete(`/menus/${id}`);
      refetch();
    };

    const logginOut = (id) => {
      toast.promise(deleting(), {
        loading: "Deleting...",
        success: <b>Item Deleted!</b>,
        error: <b>Deteting failed!</b>,
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
    <>
      <tr className="border-1 border-yellow-500 border-t-0" key={item._id}>
        <th> {seriul + 1} </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item.image} />
            </div>
          </div>
        </td>
        <td>{item.name}</td>
        <td>
          {" "}
          <span className="text-2xl">৳</span>
          {item.price}
        </td>
        <td className="flex text-xl gap-5 justify-center items-center h-full mt-4">
          <button
            onClick={() => removeHandler(item._id)}
            className="text-xl cursor-pointer text-red-500"
          >
            <FaTrash />
          </button>
          <Button
            onClick={() => setOpen(true)}
            className="text-xl cursor-pointer"
          >
            <FaEdit />
          </Button>
        </td>
      </tr>
      <UpdateMenu setOpen={setOpen} open={open} menu={item} refetch={refetch} />
    </>
  );
}

export default MenuTableRow;
