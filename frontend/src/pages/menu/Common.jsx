import SectionBanner from "../../components/SectionBanner";
import CategoryItems from "../../components/CategoryItems";
import useMenu from "../../hooks/useMenu";

function Common({ category, title, img }) {
  const [menuItems, loading] = useMenu({ category });

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="space-y-14 mt-12">
      <SectionBanner img={img} title={title} />
      <CategoryItems items={menuItems} category={category} />
    </div>
  );
}

export default Common;
