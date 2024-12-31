import Heading from "../../../components/Heading";
import Button1 from "../../../components/Button1";
import CategoryItems from "../../../components/CategoryItems";
import useMenu from "../../../hooks/useMenu";

function OurMenu() {
  const [menus, loading] = useMenu({ category: "popular" });
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div>
        <Heading title={"OUR POPULAR ITEMS"} smallTitle={"Check it out"} />
      </div>
      <CategoryItems items={menus} category={"popular"} />
      <div className="flex justify-center mt-5">
        <Button1 className="hover:bg-black hover:text-white">
          view full menu
        </Button1>
      </div>
    </div>
  );
}

export default OurMenu;
