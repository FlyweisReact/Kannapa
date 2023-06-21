/** @format */

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { MyContext } from "../MyContext";

const TrendingReel = () => {
  const navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [ dots , setDots ] = useState(false)
  const [ autoplay , setAutoPlay ] = useState(true)
  const { themeClass } = useContext(MyContext);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } 
      else if (window.innerWidth < 1200) {
        setSlidesToShow(2);
      } 
      else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
      }  else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

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

  useEffect(() => {
    const AutoPlay = () => {
      if(window.innerWidth < 768) {
        setAutoPlay(false)
      }else{
        setAutoPlay(true)
      }
    }

    AutoPlay()

    const DotsUpdater = () => {
      if(window.innerWidth < 768) {
        setDots(true)
      }else{
        setDots(false)
      }
    }

    DotsUpdater()
  },[])


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
    <div className="Slider_Container_Div">
      <Slider {...settings} className="Video_Slider">
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/5.png" alt="" />
          <p className="Video_Slider_Dark_P">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/6.png" alt="" />
          <p className="Video_Slider_Dark_P" >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/7.png" alt="" />
          <p className="Video_Slider_Dark_P">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
        </div>
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/5.png" alt="" />
          <p className="Video_Slider_Dark_P">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
        </div>
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/6.png" alt="" />
          <p className="Video_Slider_Dark_P">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div
          className={`Main_Item ${themeClass}`}
          onClick={() => navigate("/News")}
        >
          <img src="/Images/7.png" alt="" />
          <p className="Video_Slider_Dark_P">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingReel;
