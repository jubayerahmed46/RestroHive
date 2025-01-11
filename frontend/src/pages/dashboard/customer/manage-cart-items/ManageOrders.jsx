import { FaEdit, FaTrash } from "react-icons/fa";
import Heading from "../../../../components/Heading";
import useAuthorizedUserCart from "../../../../hooks/useAuthorizedUserCart";

function ManageOrders() {
  const { data } = useAuthorizedUserCart({ withFoodData: true });

  const totalPrice = data.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div>
      <Heading smallTitle={"Hurry Up!"} title={"MANAGE ALL ITEMS"} />
      <div className="mt-12 px-3 w-full">
        <div className=" bg-slate-100 lg:w-10/12 mx-auto rounded-md p-8">
          <div className="font-semibold uppercase justify-between flex mb-2 text-base">
            <p>total items: ({data.length})</p>
            <p>
              total price: <span className="text-2xl">৳</span>({totalPrice})
            </p>
          </div>

          <div className="overflow-x-auto ">
            <table className="table   ">
              {/* head */}
              <thead className="bg-[#D1A054] rounded-full  text-white/90 ">
                <tr className="font-light uppercase rounded-full">
                  <th></th>
                  <th>item image</th>
                  <th>item name</th>
                  <th>price</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr
                    className="border-1 border-yellow-500 border-t-0"
                    key={item._id}
                  >
                    <th> {i + 1} </th>
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
                      <button className="text-xl cursor-pointer text-red-500">
                        <FaTrash />
                      </button>
                      <button className="text-xl cursor-pointer">
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;
