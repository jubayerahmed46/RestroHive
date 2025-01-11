import CartLoader from "../../../components/lazy-loader/CartLoader";

function LoadingCartState() {
  return (
    <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
      {[...Array(6).keys()].map((c) => (
        <CartLoader key={c} />
      ))}
    </div>
  );
}

export default LoadingCartState;
