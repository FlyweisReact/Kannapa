/** @format */

import React from "react";
import Slider from "react-slick";

const ScoreCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Slider {...settings} className="ScoreCard_Slider">
        <div className="Main_Item">
          <div className="two_Sec">
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/26.png" alt="" />
              <p>AGR</p>
            </div>
            <div>
              <p> 169/5</p>
              <p>(20 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/27.png" alt="" />
              <p>ACC</p>
            </div>
            <div>
              <p> *70/6</p>
              <p>(12.5 ov)</p>
            </div>
          </div>

          <p className="desc">
            Athreya Cricket Club need 100 runs in 43 remaining balls
          </p>

          <div className="empty"></div>

          <p className="Scorecard">Scorecard</p>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ScoreCard;
