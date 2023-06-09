/** @format */

import React , {useRef} from "react";
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

  
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <div className="Slider_I">
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

      
      <div className="Prev_Next_cont">
          <img src={'./Images/49.png'} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={'./Images/50.png'} onClick={nextSlide} className="NextImg" alt="" />
        </div>
    </div>
  );
};

export default InstaSlider;
