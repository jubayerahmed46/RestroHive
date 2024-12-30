function PageBanner({ img, title, desc }) {
  return (
    <div
      className="xl:h-[550px] md:h-[470px] h-[420px] w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex justify-center items-center  h-full bg-black/20">
        <div className="bg-black/50 md:p-16 p-8 flex justify-center flex-col items-center text-center   md:w-9/12 w-11/12 text-white  shadow-sm ">
          <h2 className="text-5xl mb-3 uppercase">{title} </h2>
          <p className="uppercase text-xl">{desc}</p>
        </div>
      </div>
    </div>
  );
}
export default PageBanner;
