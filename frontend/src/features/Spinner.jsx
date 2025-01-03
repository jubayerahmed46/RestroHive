import { FadeLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="absolute z-40 bg-black/30 h-full w-full flex justify-center items-center top-0 left-0">
      <FadeLoader height={20} color="#000" speedMultiplier={2} />
    </div>
  );
}

export default Spinner;
