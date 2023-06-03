/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const IndexVideoSlider = () => {
  useEffect(() => {
    const updateSlideWidth = () => {
      const slideElements = document.querySelectorAll(".Main_Item");
      slideElements.forEach((slide) => {
        slide.style.width = `${slide.parentNode.offsetWidth * 0.9}px`;
      });
    };

    // Call the function initially and on window resize
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="Video_Slider">
      <div className="Main_Item">
        <img src="/Images/5.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      </div>
      <div className="Main_Item">
        <img src="/Images/6.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
     </div>
      <div className="Main_Item">
        <img src="/Images/7.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      </div>
      <div className="Main_Item">
        <img src="/Images/5.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
        </div>
      <div className="Main_Item">
        <img src="/Images/6.png" alt="" />
        <h6>Lorem Ipsum is a dummy text, sed alerm wefv ramkunda </h6>
      </div>
      <div className="Main_Item">
        <img src="/Images/7.png" alt="" />
        <h6>Lorem Ipsum is a dummy text, sed alerm wefv ramkunda </h6>
      </div>
    </Slider>
  );
};

export default IndexVideoSlider;
