/** @format */

import React from "react";
import Slider from "react-slick";

const InstaSlider = () => {
  const sliderRef = useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings} className="Insta_Slider">
        <div className="Main_Item">
          <img src="./Images/120.png" alt="" />
        </div>
        <div className="Main_Item">
          <img src="./Images/121.png" alt="" />
        </div>
        <div className="Main_Item">
          <img src="./Images/122.png" alt="" />
        </div>
        <div className="Main_Item">
          <img src="./Images/123.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default InstaSlider;
