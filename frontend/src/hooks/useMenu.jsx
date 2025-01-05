import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

function useMenu({ category, perPageItems: size, curPage: page }) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    setMenus([]);
    axiosPublic
      .get(`/menus/${category}?size=${size}&page=${page}`)
      .then((res) => {
        setMenus(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, page, size, axiosPublic]);

  return [menus, loading];
}

export default useMenu;
