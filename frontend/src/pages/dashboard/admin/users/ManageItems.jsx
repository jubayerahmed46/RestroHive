import Heading from "../../../../components/Heading";
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import Spinner from "../../../../features/Spinner";

import MenuTableRow from "../../../../components/MenuTableRow";

function ManageItems() {
  const axiosSecure = useAxiosInstance();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allMenuItem"],
    queryFn: async () => {
      const { data } = await axiosSecure("/menus");
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Heading smallTitle={"Hurry Up!"} title={"MANAGE ALL ITEMS"} />
      <div className="mt-12 px-3 w-full">
        <div className=" bg-slate-100 lg:w-10/12 mx-auto rounded-md p-8">
          <div className="font-semibold uppercase justify-between flex mb-2 text-base">
            <p>total items: ({data.length})</p>
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
                  <MenuTableRow
                    item={item}
                    key={i}
                    seriul={i}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageItems;
