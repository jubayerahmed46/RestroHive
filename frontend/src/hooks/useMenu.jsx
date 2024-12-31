import axios from "axios";
import { useEffect, useState } from "react";

function useMenu({ category, perPageItems: size, curPage: page }) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setMenus([]);
    axios
      .get(`http://localhost:5000/menus/${category}?size=${size}&page=${page}`)
      .then((res) => {
        setMenus(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, page, size]);

  return [menus, loading];
}

export default useMenu;
