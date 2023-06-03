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
            </div>
          </div>
          <div className="Mid_Comp"></div>
          <div className="Right_Comp"></div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
