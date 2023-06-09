/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const Index = () => {
    useEffect(() => {
        const updateSlideWidth = () => {
          const slideElements = document.querySelectorAll(".Main_Item");
          slideElements.forEach((slide) => {
            slide.style.width = `${slide.parentNode.offsetWidth * 1}px`;
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
       <div className="Slider_Container_Div">
         <Slider {...settings} className="Video_Slider">
          <div className="Main_Item">
            <img src="/Images/5.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
          </div>
          <div className="Main_Item">
            <img src="/Images/6.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
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
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
          </div>
          <div className="Main_Item">
            <img src="/Images/7.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          </div>
        </Slider>
       </div>
      );
    };

export default Index;
