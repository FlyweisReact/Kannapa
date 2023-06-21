/** @format */

import React, { useState, useEffect } from "react";
import FadingCategory from "../Layout/FadingNav/FadingCategory";
import FadingNav from "../Layout/FadingNav/FadingNav";
import Header1 from "../Layout/FadingNav/Header1";
import Navbar from "../Layout/Navbar";
import MobileNavbar from "../Layout/Responsive/MobileNavbar";

const Header = () => {
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
      <div
        className={`${scrolled ? "fade-out" : "fade-in"}`}
      >
        <Header1 />
        <FadingNav />
        <FadingCategory />
      </div>

      <div
        className={`${scrolled ? "fade-in" : "fade-out"}`}
      >
        <Navbar />
      </div>

      {/* Mobile Navbar  */}
      <MobileNavbar />
    </>
  );
};

export default Header;
