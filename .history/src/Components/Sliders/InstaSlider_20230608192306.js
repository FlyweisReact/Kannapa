/** @format */

import React , {useRef , useState} from "react";
import Slider from "react-slick";

const InstaSlider = () => {
  const sliderRef = useRef(null);
  const totalSlides = 4; // Total number of slides
  const [currentSlide, setCurrentSlide] = useState(0);



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };


  
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;



  return (
    

    <>
         <div style={{ width: "100%", height: "10px", background: "#ddd" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "blue",
          }}
        />
      </div>

    </>

  );
};

export default InstaSlider;
