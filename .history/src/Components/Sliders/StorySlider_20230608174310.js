import React, { useEffect , useRef} from "react";
import Slider from "react-slick";

const StorySlider = () => {
    const sliderRef = useRef(null);


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
          <Slider {...settings}  >
                <div>

                </div>
          </Slider>
          </div>
      </>
    );
  };
  

export default StorySlider