/** @format */

import React, { useEffect, useContext } from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import IndexVideoSlider from "../Components/Sliders/Index-video-Slider";

const News = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <CenterBanner />

      <div className="Index_Center_GIF">
        <img src="./Images/1.gif" alt="" />
      </div>

      <div className={themeClass}>
        <div className="Index_Center_Desc">
          <div className="Main_Comp">
            <p className="head">The prince of pleasure who become king</p>

            <div className="Two_Sec">
              <p>18 May 2023</p>
              <img src="./Images/SVG/1.svg" alt="" />
              <p>History</p>
            </div>

            <div className="desc">
              <p>
                Britain’s King Edward VII has always been something of an
                enigma. A complex man filled with contradictions, he was a
                pioneering royal, while also a philanderer, a boorish
                philistine, and a civilized man of ideas. Using extensive new
                research, this history documentary unravels the mystery of a
                thoroughly modern monarch and reveals that his legacy is still
                relevant today.
              </p>
              <p>
                Watch the full documentary King Edward VII: Prince of Pleasure
                on <u>BBC Select</u>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Index_Logo_Div">
        <div className="Left_Comp">
        {
          themeClass === 'dark' ?  
          <>
          <img src="./Images/2.png" alt="" />
          <img src="./Images/3.png" alt="" />
          </> : <img src='./Images/132.png' alt='' />
        }
          
        </div>
        <div className="Right_Comp">
          <img src="./Images/4.png" alt="" />
        </div>
      </div>

      <div className="Index_Video_Slider">
        <IndexVideoSlider />
      </div>

      <div className="Index_Center_Button">
        <button>More videos </button>
        <div className="empty"></div>
      </div>

    <

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default News;
