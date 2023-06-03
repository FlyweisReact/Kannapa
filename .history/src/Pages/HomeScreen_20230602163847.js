/** @format */

import React, { useState, useEffect } from "react";
import FadingCategory from "../Components/Layout/FadingNav/FadingCategory";
import FadingNav from "../Components/Layout/FadingNav/FadingNav";
import Header1 from "../Components/Layout/FadingNav/Header1";
import Navbar from "../Components/Layout/Navbar";


const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const HomeScreen = () => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 120); // Adjust the debounce delay as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <div
        className={`Fading_Div ${scrolled ? "fade-out" : "fade-in"}`}
        style={{
          opacity: scrolled ? 0 : 1,
          transition: "opacity 0.5s",
          height: scrolled ? 0 : "auto",
          overflow: "hidden",
        }}
      >
        <Header1 />
        <FadingNav />
        <FadingCategory />
      </div>

      <div
        className={`${scrolled ? "fade-in" : "fade-out"}`}
        style={{
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.5s',
          height: scrolled ? 'auto' : 0,
          overflow: 'hidden',
          width: '100%',

  
        }}
      >
        <Navbar />
      </div>

      <div className="Index_Center_Banner">
        <img src="./Images/1.png" alt="" />
      </div>

      <div className="Index_Center_GIF">
        <img src="./Images/1.gif" alt="" />
      </div>

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
              Britain’s King Edward VII has always been something of an enigma.
              A complex man filled with contradictions, he was a pioneering
              royal, while also a philanderer, a boorish philistine, and a
              civilized man of ideas. Using extensive new research, this history
              documentary unravels the mystery of a thoroughly modern monarch
              and reveals that his legacy is still relevant today.
            </p>
            <p>
              Watch the full documentary King Edward VII: Prince of Pleasure on{" "}
              <u>BBC Select</u>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
