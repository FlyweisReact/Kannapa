/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const TrendingReel = () => {
    useEffect(() => {
        const updateSlideWidth = () => {
          const slideElements = document.querySelectorAll(".Main_Item");
          slideElements.forEach((slide) => {
            slide.style.width = `${slide.parentNode.offsetWidth * 0.98}px`;
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };
    
      return (
       <div className=""></div>
      );
    };

export default TrendingReel;
