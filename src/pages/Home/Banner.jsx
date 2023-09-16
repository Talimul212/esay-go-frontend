/* eslint-disable no-unused-vars */
import React from "react";
import bannerimg from "../../assets/banner/bannerImg.png";
import Slider from "../../components/silder/Slider";

const Banner = () => {
  return (
    <div>
      {" "}
      <Slider img={bannerimg}></Slider>{" "}
    </div>
  );
};

export default Banner;
