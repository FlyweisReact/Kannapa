/** @format */

import React from "react";
import Navbar from "../Layout/Navbar";
import MobileNavbar from "../Layout/Responsive/MobileNavbar";

const NormalHeader = () => {
  return (
    <>
      <Navbar />
      <div className='Header_Container_2'>
        <MobileNavbar />
      </div>
    </>
  );
};

export default NormalHeader;
