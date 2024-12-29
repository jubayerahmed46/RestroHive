import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./slider.css";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const slideArray = [
  { slide: slide1, title: "SALADS" },
  { slide: slide2, title: "PIZZA" },
  { slide: slide3, title: "SOUPS" },
  { slide: slide4, title: "DESSERS" },
  { slide: slide5, title: "SALADS" },
];

function Slider() {
  return (
    <div>
      <Slides />
    </div>
  );
}

export default Slider;

function Slides() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider h-80">
      {slideArray.map((slide, i) => (
        <div
          key={i}
          className={`keen-slider__slide ${`number-slide${
            i + 1
          }`} relative h-64`}
        >
          <img
            src={slide.slide}
            className={`w-full h-full object-cover brightness-75`}
          />
          <p className="absolute bottom-2  drop-shadow-md uppercase font-light text-2xl">
            {slide.title}
          </p>
        </div>
      ))}
    </div>
  );
}
