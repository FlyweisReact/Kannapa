/** @format */

import React, { useEffect } from "react";
import Slider from "react-slick";

const IndexVideoSlider = () => {
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


  const [slidesToShow, setSlidesToShow] = useState(5); 

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1400) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    })

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
