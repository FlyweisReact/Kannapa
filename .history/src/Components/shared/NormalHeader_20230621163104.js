/** @format */

import React from "react";
import Navbar from "../Layout/Navbar";
import MobileNavbar from "../Layout/Responsive/MobileNavbar";

const NormalHeader = () => {
  return (
    <>
      <Navbar />
      <div style={{width : '80px'}}></div>
      <MobileNavbar />

    </>
  );
};

export default NormalHeader;
