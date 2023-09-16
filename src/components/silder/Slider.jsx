/* eslint-disable react/prop-types */
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = ({ img }) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img src={img} style={{ width: "600px" }} />
              <div>
                <h1 className="text-5xl font-bold text-left">
                  Largest and reliable daily <br />
                  service in your city
                </h1>
                <h1 className="text-5xl font-bold text-left">in your city</h1>
                <p className="py-6 text-left text-gray-400 text-2xl font-simebold">
                  Coordinated connected credible
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img src={img} style={{ width: "600px" }} />
              <div>
                <h1 className="text-5xl font-bold text-left">
                  Largest and reliable daily <br />
                  service in your city
                </h1>
                <h1 className="text-5xl font-bold text-left">in your city</h1>
                <p className="py-6 text-left text-gray-400 text-2xl font-simebold">
                  Coordinated connected credible
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
