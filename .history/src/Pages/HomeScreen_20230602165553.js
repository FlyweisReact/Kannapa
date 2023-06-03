/** @format */

import React, { useState, useEffect } from "react";
import FadingCategory from "../Components/Layout/FadingNav/FadingCategory";
import FadingNav from "../Components/Layout/FadingNav/FadingNav";
import Header1 from "../Components/Layout/FadingNav/Header1";
import Navbar from "../Components/Layout/Navbar";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
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
    }, 100); // Adjust the debounce delay as needed

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      </section>

   

  
    </>
  );
};

export default HomeScreen;
