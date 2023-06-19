/** @format */

import React, { useEffect, useState , useContext } from "react";
import Slider from "react-slick";
import { MyContext } from "../MyContext";

const IndexVideoSlider = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    const updateSlideWidth = () => {
      const slideElements = document.querySelectorAll(".Main_Item");
      slideElements.forEach((slide) => {
        slide.style.width = `${slide.parentNode.offsetWidth * 0.98}px`;
      });
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
 return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);


  const [slidesToShow, setSlidesToShow] = useState(3); 

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1400) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className={`Video_Slider   INdex_Slide_Tab`}>
      <div className="Main_Item">
        <img src="/Images/5.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
      </div>
      <div className="Main_Item">
        <img src="/Images/6.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
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
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
      </div>
      <div className="Main_Item">
        <img src="/Images/7.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      </div>
    </Slider>
  );
};

export default IndexVideoSlider;
