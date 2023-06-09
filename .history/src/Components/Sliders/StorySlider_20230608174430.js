import React, { useEffect , useRef} from "react";
import Slider from "react-slick";

const StorySlider = () => {


 
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
          <Slider {...settings}  >
                <div>
                            <img src='./Images/7.png' alt='' />      
                </div>
                <div>
                            <img src='./Images/7.png' alt='' />      
                </div>
                <div>
                            <img src='./Images/7.png' alt='' />      
                </div>
                <div>
                            <img src='./Images/7.png' alt='' />      
                </div>
                <div>
                            <img src='./Images/7.png' alt='' />      
                </div>
          </Slider>
      </>
    );
  };
  

export default StorySlider