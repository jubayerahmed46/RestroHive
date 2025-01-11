function CartLoader() {
  return (
    <div className="h-[450px] bg-gray-800">
      <div className="bg-gray-600 animate-pulse  h-[260px]"></div>
      <div className="p-3">
        <h4 className="delay-100 bg-gray-600 animate-pulse h-[30px]  mt-2"></h4>
        <p className="delay-150 bg-gray-600 h-[10px]  mt-4 animate-pulse"></p>
        <p className="animate-pulse bg-gray-600 h-[10px]  mt-1"></p>
        <p className="delay-200 bg-gray-600 animate-pulse h-[10px] w-2/3  mt-1"></p>
        <div className="flex justify-center items-center mt-4 rounded-lg">
          <button className="delay-300 bg-gray-600 h-12 animate-pulse w-3/5 mx-auto"></button>
        </div>
      </div>
    </div>
  );
}

export default CartLoader;
