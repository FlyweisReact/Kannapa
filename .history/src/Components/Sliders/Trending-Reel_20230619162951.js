/** @format */

import React, { useEffect , useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { MyContext } from "../MyContext";

const TrendingReel = () => {
  const navigate = useNavigate()
  const [slidesToShow, setSlidesToShow] = useState(4); 
  
  const { themeClass } = useContext(MyContext);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1400) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
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
          <div className="Main_Item" onClick={() => navigate('/News')}>
            <img src="/Images/5.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
          </div>
          <div className="Main_Item" onClick={() => navigate('/News')} >
            <img src="/Images/6.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
          </div>
          <div className="Main_Item" onClick={() => navigate('/News')}>
            <img src="/Images/7.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          </div>
          <div className="Main_Item" onClick={() => navigate('/News')}>
            <img src="/Images/5.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          </div>
          <div className="Main_Item" onClick={() => navigate('/News')}>
            <img src="/Images/6.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
          </div>
          <div className="Main_Item" onClick={() => navigate('/News')}>
            <img src="/Images/7.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          </div>
        </Slider>
       </div>
      );
    };

export default TrendingReel;
