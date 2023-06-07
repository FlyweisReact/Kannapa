/** @format */

import React from "react";
import Navbar from "../Components/Layout/Navbar";

const FantasyPreview = () => {
  return (
    <>
      <Navbar />

      <div className="Index_Center_Banner">
        <img src="./Images/1.png" alt="" />
      </div>

      <div className="Fantasy_Three_Sec">
        <div className="Item">
          <p>Format</p>
          <select>
            <option>Select Format</option>
            <option></option>
          </select>
        </div>

        <div className="Item">
          <p>Format</p>
          <select>
            <option>Select Format</option>
            <option></option>
          </select>
        </div>

        
      </div>
    </>
  );
};

export default FantasyPreview;
