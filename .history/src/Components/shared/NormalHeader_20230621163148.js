/** @format */

import React from "react";
import Navbar from "../Layout/Navbar";
import MobileNavbar from "../Layout/Responsive/MobileNavbar";

const NormalHeader = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }}>
        <MobileNavbar />
      </div>
    </>
  );
};

export default NormalHeader;
