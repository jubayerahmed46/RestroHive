import { Box, Tab, Tabs } from "@mui/material";

function CategoryTabs({ handleChange, value, a11yProps, tabs }) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} aria-label="shop tab">
        {tabs.map((tab, i) => (
          <Tab key={tab.id} label={tab.category} {...a11yProps(i)} />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;
