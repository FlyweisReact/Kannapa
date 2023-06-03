/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const BlogSlider = () => {
  useEffect(() => {
    const updateSlideWidth = () => {
      const slideElements = document.querySelectorAll(".Main_Item");
      slideElements.forEach((slide) => {
        slide.style.width = `${slide.parentNode.offsetWidth * 0.98}px`;
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
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (

     <Slider {...settings} className="Blog_Slider">
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
      <div className="first">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a docu
        </p>
      </div>
     
    </Slider>
  );
};

export default BlogSlider;
