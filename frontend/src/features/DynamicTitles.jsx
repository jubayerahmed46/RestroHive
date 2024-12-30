import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

function DynamicTitles() {
  const location = useLocation();
  const currentRoute = () => {
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
