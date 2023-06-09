/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const InstaSlider = () => {
  
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
            <img src="./Images/5.png" alt="" />
         
          </div>
          <div className="Main_Item">
            <img src="./Images/6.png" alt="" />
         
          </div>
          <div className="Main_Item">
            <img src="./Images/7.png" alt="" />
           
          </div>
          <div className="Main_Item">
            <img src="./Images/5.png" alt="" />
         
          </div>
          <div className="Main_Item">
            <img src="./Images/6.png" alt="" />
         
          </div>
          <div className="Main_Item">
            <img src="./Images/7.png" alt="" />
          </div>
        </Slider>
       </div>
      );
    };

export default InstaSlider;
