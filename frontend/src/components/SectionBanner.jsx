function SectionBanner({ title, img }) {
  return (
    <div
      className="xl:h-[450px] bg-fixed md:h-[400px] h-[350px] w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex justify-center items-center  h-full bg-black/20">
        <div className="bg-black/50 md:p-16 p-8 flex justify-center flex-col items-center text-center   md:w-9/12 w-11/12 text-white  shadow-sm ">
          <h2 className="text-3xl mb-3 uppercase">{title} </h2>
          <p className="font-light text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            distinctio dicta nulla totam numquam at placeat aliquam nemo non
            itaque!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionBanner;
