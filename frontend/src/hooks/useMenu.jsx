import { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

function useMenu({ category, perPageItems: size, curPage: page }) {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // useEffect(() => {
  //   setMenus([]);
  //   axiosPublic
  //     .get()
  //     .then((res) => {
  //       setMenus(res.data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [category, page, size, axiosPublic]);
  const {
    data: menus = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus", category, size, page],
    // enabled: !!category && !!size && !!page,
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/menus/${category}?size=${size}&page=${page}`
      );
      return data;
    },
  });

  return [menus, loading, refetch];
}

export default useMenu;
