import Box from "@mui/material/Box";
import { tabs } from "./tabls";
import useMenu from "../../hooks/useMenu";
import { useLocation } from "react-router";
import ShopCategoriesItems from "./ShopCategoriesItems";
import Pagination from "./Pagination";
import CategoryTabs from "./CategoryTabs";
import { CustomTabPanel, a11yProps } from "./TabMeterials";
import { useEffect, useState } from "react";

function ShopCategories() {
  const location = useLocation();
  let currIndex =
    !location.state || location.state === "offered"
      ? 0
      : tabs.findIndex((tab) => tab.category === location.state);
  const [value, setValue] = useState(currIndex);
  const [menuData, setMenuData] = useState([]);
  const perPageItems = 6;
  const [curPage, setCurPage] = useState(0);
  const [menus, loading] = useMenu({
    category: tabs[value].category,
    perPageItems,
    curPage,
  });

  const totalPages = [
    ...Array(Math.ceil(menus?.count / perPageItems || 0)).keys(),
  ];
  const paginationHandler = (page) => {
    setCurPage(page);
  };

  useEffect(() => {
    setMenuData(menus?.menus || []);
  }, [menus]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const prevHandler = () => {
    if (0 < curPage) {
      setCurPage((prev) => prev - 1);
    }
  };
  const nextHandler = () => {
    if (totalPages.length - 1 > curPage) {
      setCurPage((prev) => prev + 1);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <CategoryTabs
          handleChange={handleChange}
          value={value}
          a11yProps={a11yProps}
          tabs={tabs}
        />
        <ShopCategoriesItems
          menus={menuData}
          tabs={tabs}
          value={value}
          CustomTabPanel={CustomTabPanel}
        />
      </Box>
      <Pagination
        nextHandler={nextHandler}
        curPage={curPage}
        prevHandler={prevHandler}
        totalPages={totalPages}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}

export default ShopCategories;
