import { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import axios from "axios";
import MenuCard from "../../../components/MenuCard";
import Button1 from "../../../components/Button1";

function OurMenu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios.get("/menu.json").then((res) => {
      const popularItems = res.data.filter(
        (item) => item.category === "popular"
      );
      setMenus(popularItems);
    });
  }, []);
  return (
    <div>
      <div>
        <Heading title={"OUR POPULAR ITEMS"} smallTitle={"Check it out"} />
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 ">
        {menus.map((item) => (
          <MenuCard key={item.name} menu={item} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Button1> view full menu</Button1>
      </div>{" "}
    </div>
  );
}

export default OurMenu;
