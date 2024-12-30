import CategoryItems from "../../components/CategoryItems";
import Heading from "../../components/Heading";
import useMenu from "../../hooks/useMenu";

function TodaysOffer() {
  const [offeredMenu, loading] = useMenu({ category: "offered" });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="my-10">
      <Heading smallTitle={"Don't Miss"} title={"Today's offer"} />
      <CategoryItems items={offeredMenu} category={"offered"} />
    </div>
  );
}

export default TodaysOffer;
