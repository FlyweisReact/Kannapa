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

        <div className="Item_2">
            <button>Clear</button>
        </div>
      </div>



      <div className="Fantasy_Two_Sec">
      <div className="Left_Comp">
        <img src='./Images/82.png' alt='' />
        <p className="date">Chennai Super Kings (CSK)</p>
        <p className="head">CSK vs KKR, IPL 2023: ‘They will wait for me to get
out’ Ravindra Jadeja makes SHOCKING claim
regarding his…</p>
      </div>

      </div>
    </>
  );
};

export default FantasyPreview;
