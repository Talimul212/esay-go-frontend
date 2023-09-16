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
              <img src={img} className="w-[500px] h-[400px] " />
              <div>
                <h1 className="text-5xl font-bold ">
                  Largest and reliable daily <br />
                  service in your city
                </h1>
                <h1 className="text-5xl font-bold ">in your city</h1>
                <p className="py-6">Coordinated connected credible</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img src={img} className="w-[500px] h-[400px] " />
              <div>
                <h1 className="text-5xl font-bold ">
                  Largest and reliable daily <br />
                  service in your city
                </h1>
                <h1 className="text-5xl font-bold ">in your city</h1>
                <p className="py-6">Coordinated connected credible</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
