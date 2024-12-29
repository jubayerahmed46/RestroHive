/* eslint-disable react/prop-types */
function MenuCard({ menu }) {
  return (
    <div className="flex  gap-4 border p-3 rounded-md border-opacity-10 items-center">
      <img
        src={menu.image}
        className="h-32 aspect-square object-cover rounded-full rounded-tl-none"
        alt=""
      />
      <div>
        <h3 className="text-3xl mb-1">{menu.name} </h3>
        <p className="md:w-5/6 w-auto">{menu.recipe} </p>
      </div>
      <p className="text-orange-500">${menu.price} </p>
    </div>
  );
}

export default MenuCard;
