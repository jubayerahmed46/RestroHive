import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

function DynamicTitles() {
  const location = useLocation();
  const currentRoute = () => {
    if (location.pathname.includes("/shop")) return "Shop";

    switch (location.pathname) {
      case "/":
        return "Home";
      case "/menu":
        return "Menu";

      default:
        return "";
    }
  };
  return (
    <Helmet>
      <title>RestoHive | {currentRoute()} </title>
    </Helmet>
  );
}

export default DynamicTitles;
