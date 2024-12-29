import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

function Banner() {
  return (
    <div>
      <App />{" "}
    </div>
  );
}

export default Banner;

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider  xl:h-[550px] md:h-[500px] h-[300px]"
      >
        <div className="keen-slider__slide number-slide1 ">
          <img src={img1} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={img2} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={img3} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={img4} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={img5} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src={img6} alt="" className="h-full object-cover w-full " />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider  thumbnail   ">
        <div className="keen-slider__slide number-slide1">
          <img src={img1} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={img2} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={img3} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={img4} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={img5} alt="" className="h-full object-cover w-full " />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src={img6} alt="" className="h-full object-cover w-full " />
        </div>
      </div>
    </>
  );
}
