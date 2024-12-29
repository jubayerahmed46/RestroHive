import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import "@smastrom/react-rating/style.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex justify-center flex-col items-center  text-center md:w-3/5 space-y-3 w-5/6">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div>
                <p>{review.details} </p>
                <h2 className="text-yellow-500 mt-2 text-3xl">
                  {review.name}{" "}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
