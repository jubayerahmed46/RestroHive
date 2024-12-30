import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Box from "@mui/material/Box";
import { tabs } from "./tabls";
import useMenu from "../../hooks/useMenu";
import FoodItemCard from "../../components/FoodItemCard";
import { useLocation } from "react-router";

function ShopCategories() {
  return (
    <div>
      <ShopItemCategroyTabs />
    </div>
  );
}

export default ShopCategories;

function ShopItemCategroyTabs() {
  const location = useLocation();
  let currIndex =
    !location.state || location.state === "offered"
      ? 0
      : tabs.findIndex((tab) => tab.category === location.state);
  const [value, setValue] = React.useState(currIndex);
  const [menus] = useMenu({ category: tabs[value].category });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="shop tab">
          {tabs.map((tab, i) => (
            <Tab key={tab.id} label={tab.category} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((_, i) => (
        <CustomTabPanel key={i} value={value} index={i}>
          <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
            {menus.map((item, i) => (
              <FoodItemCard key={i} food={item} />
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
