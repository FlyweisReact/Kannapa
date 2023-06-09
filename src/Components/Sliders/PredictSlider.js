/** @format */

import React from "react";
import Slider from "react-slick";

const PredictSlider = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null, // Hide next arrow
        prevArrow: null,
      };



  return (
    <>
      <div className="Slider_Container">
        <Slider {...settings} className="Predict_Slider">
          <div className="Main">
            <img src="./Images/114.png" alt="" />

            <p className="head">Select a Side</p>
            <p className="desc">
              Choose left or right side in 10 secs, where you think batter will
              hit next ball.
            </p>
          </div>
          
          <div className="Main">
            <img src="./Images/114.png" alt="" />

            <p className="head">Select a Side</p>
            <p className="desc">
              Choose left or right side in 10 secs, where you think batter will
              hit next ball.
            </p>
          </div>
          <div className="Main">
            <img src="./Images/114.png" alt="" />

            <p className="head">Select a Side</p>
            <p className="desc">
              Choose left or right side in 10 secs, where you think batter will
              hit next ball.
            </p>
          </div>
          <div className="Main">
            <img src="./Images/114.png" alt="" />

            <p className="head">Select a Side</p>
            <p className="desc">
              Choose left or right side in 10 secs, where you think batter will
              hit next ball.
            </p>
          </div>
          <div className="Main">
            <img src="./Images/114.png" alt="" />

            <p className="head">Select a Side</p>
            <p className="desc">
              Choose left or right side in 10 secs, where you think batter will
              hit next ball.
            </p>
          </div>
          
        </Slider>
      </div>
    </>
  );
};

export default PredictSlider;
