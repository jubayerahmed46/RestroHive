import axios from "axios";
import { useEffect, useState } from "react";

function useMenu({ category }) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setMenus([]);
    axios
      .get("/menu.json")
      .then((res) => {
        const filteredItems = res.data.filter(
          (item) => item.category?.toLowerCase() === category?.toLowerCase()
        );
        setMenus(filteredItems);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);
  return [menus, loading];
}

export default useMenu;
