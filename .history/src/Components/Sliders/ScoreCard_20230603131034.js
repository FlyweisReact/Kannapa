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
              <img src="./Images/28.png" alt="" />
              <p>MAL</p>
            </div>
            <div>
              <p>*130/9</p>
              <p>(19 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/29.png" alt="" />
              <p>CMD</p>
            </div>
            <div>
              <p> 143/9</p>
              <p>(20 ov)</p>
            </div>
          </div>

          <p className="desc">Malaysia need 14 runs in 6 remaining balls </p>

          <div className="empty"></div>

          <p className="Scorecard">Scorecard</p>
        </div>

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
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/30.png" alt="" />
              <p>SNA</p>
            </div>
        
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/31.png" alt="" />
              <p>ACT</p>
            </div>
        
          </div>

          <p className="desc">
          SNASY elected to bowl
          </p>

          <div className="empty"></div>

          <p className="Scorecard">Scorecard</p>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/32.png" alt="" />
              <p>BD-19</p>
            </div>
            <div>
              <p> *34/0</p>
              <p>(6 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/33.png" alt="" />
              <p>PK-19</p>
            </div>
            <div>
              <p>154/10</p>
              <p>(41.4 ov)</p>
            </div>
          </div>

          <p className="desc">
          Bangladesh Under-19s need 121 runs in 44.0
remaining overs
          </p>

          <div className="empty"></div>

          <p className="Scorecard">Scorecard</p>
        </div>

        <div className="Main_Item">
          <div className="two_Sec">
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/26.png" alt="" />
              <p>PAL</p>
            </div>
            <div>
              <p>*173/5 </p>
              <p>(37 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/27.png" alt="" />
              <p>HS</p>
            </div>
          </div>

          <p className="desc">
          Pamir legends elected to bat    </p>

          <div className="empty"></div>

          <p className="Scorecard">Scorecard</p>
        </div>

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
      </Slider>
    </div>
  );
};

export default ScoreCard;
