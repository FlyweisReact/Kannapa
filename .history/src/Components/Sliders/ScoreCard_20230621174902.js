/** @format */

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { MyContext } from "../MyContext";

const ScoreCard = () => {
  const navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(5);
  const { themeClass } = useContext(MyContext);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
      } 
      else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Slider {...settings} className={`ScoreCard_Slider ${themeClass}`}>
        {/* <div className={`Main_Item Special_Content ${themeClass}`}>
          <div className="Contect_Live_Div">
          <p>Live</p>
          <i className="fa-solid fa-caret-down"></i>
          
          </div>
        </div> */}

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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

          <p className="Scorecard" onClick={() => navigate("/scoreCard")}>
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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

          <p className="desc">SNASY elected to bowl</p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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
            Bangladesh Under-19s need 121 runs in 44.0 remaining overs
          </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/34.png" alt="" />
              <p>PAL</p>
            </div>
            <div>
              <p>*173/5 </p>
              <p>(37 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/35.png" alt="" />
              <p>HS</p>
            </div>
          </div>

          <p className="desc">Pamir legends elected to bat </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/26.png" alt="" />
              <p>ZIM-A</p>
            </div>
            <div>
              <p>163/10 </p>
              <p>(56.4 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/33.png" alt="" />
              <p>PKS</p>
            </div>
            <div>
              <p> *115/1</p>
              <p>(24 ov)</p>
            </div>
          </div>

          <p className="desc">
            Stumps : Day 1 Pakistan Shaheens trail by 48 runs.{" "}
          </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>
        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}> LIVE</p>
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

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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

          <p className="desc">SNASY elected to bowl</p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first" style={{color : 'red'}}>LIVE</p>
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
            Bangladesh Under-19s need 121 runs in 44.0 remaining overs
          </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/34.png" alt="" />
              <p>PAL</p>
            </div>
            <div>
              <p>*173/5 </p>
              <p>(37 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/35.png" alt="" />
              <p>HS</p>
            </div>
          </div>

          <p className="desc">Pamir legends elected to bat </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>

        <div className={`Main_Item ${themeClass}`}>
          <div className="two_Sec">
            <p className="first">LIVE</p>
            <p>Thu 5/11 9:00 am</p>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/26.png" alt="" />
              <p>ZIM-A</p>
            </div>
            <div>
              <p>163/10 </p>
              <p>(56.4 ov)</p>
            </div>
          </div>

          <div className="Flags_Div">
            <div>
              <img src="./Images/33.png" alt="" />
              <p>PKS</p>
            </div>
            <div>
              <p> *115/1</p>
              <p>(24 ov)</p>
            </div>
          </div>

          <p className="desc">
            Stumps : Day 1 Pakistan Shaheens trail by 48 runs.{" "}
          </p>

          <div className="empty"></div>

          <p
            className="Scorecard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/scoreCard")}
          >
            Scorecard
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ScoreCard;
