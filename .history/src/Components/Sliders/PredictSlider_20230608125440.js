import React, { useEffect } from "react";
import Slider from "react-slick";

const PredictSlider = () => {


    useEffect(() => {
      const updateSlideWidth = () => {
        const slideElements = document.querySelectorAll(".Main_Item");
        slideElements.forEach((slide) => {
          slide.style.width = `${slide.parentNode.offsetWidth * 1}px`;
        });
      };
  
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  

  
    return (
      <>
        <div className="Slider_Container"  >
          <Slider {...settings} className="Predict_Slider">
            
        <div className="Main">
            <img src='./Images'
        </div>
            
          </Slider>
        </div>
      </>
    );
  };

export default PredictSlider