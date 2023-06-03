/** @format */

import React, { useState, useEffect } from "react";
import FadingCategory from "../Components/Layout/FadingNav/FadingCategory";
import FadingNav from "../Components/Layout/FadingNav/FadingNav";
import Header1 from "../Components/Layout/FadingNav/Header1";
import Navbar from "../Components/Layout/Navbar";
import ScoreCard from "../Components/Sliders/ScoreCard";

const HomeScreen = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="HomePage">
        <div className={`${scrolled ? "fade-out" : "fade-in"}`}>
          <Header1 />
          <FadingNav />
          <FadingCategory />
        </div>

        <div className={`${scrolled ? "fade-in" : "fade-out"}`}>
          <Navbar />
        </div>

        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Score_Card_Layout">
          <ScoreCard />
        </div>

        <div className="Index_Three_Sec_Layout">
          <div className="left_Comp">
            <div className="Trading_News">
              <button>
                trending NEWS
                <i class="fa-solid fa-fire"></i>
              </button>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>
            </div>
            <div className="BigImage">
              <img src="./Images/37.png" alt="" />
            </div>
          </div>
          <div className="Mid_Comp"></div>

          <div className="Right_Comp">
            <div className="Main_Item">
              <div className="Three_Sec">
                <button className="First_Btn">RANKING</button>
                <div>
                  <button className="First">Men</button>
                  <button>Women</button>
                </div>
              </div>
            </div>

            <div className="Big_Div">
              <div className="Three_Button">
                <button className="special">TEST</button>
                <button>ODI</button>
                <button>T20</button>
              </div>

              <div className="Four_Button">
                <button className="Special"> Teams</button>
                <button> Batting</button>
                <button> Bowling</button>
                <button> ALR</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Rating</th>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
