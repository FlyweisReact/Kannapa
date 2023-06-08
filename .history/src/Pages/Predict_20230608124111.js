/** @format */

import React from "react";
import Navbar from "../Components/Layout/Navbar";

const Predict = () => {
  return (
    <>
      <Navbar />

      <div className="Predict_Win">

        <div className="Left_Comp">

            <div className="first">
                    <div className="title">
                        <img src="./Images/112.png" alt='' />
                        <p>Abir Das</p>
                    </div>

                    <div className="Logo">
                        <img src='./Images/113.png' alt='' />
                    </div>

                    <div className="content">
                        <p className="Head">Predict & Win</p>
                        <p>Cricket, Football & Kabaddi</p>
                    </div>

            </div>

        </div>



        <div className="Right_Comp">
          <div className="Content">
            <p className="desc">
              Most Complete predict & win platform you can find
            </p>
            <p className="head">Predict & Win</p>
            <p className="desc2">Cricket, Football & Kabaddi</p>
            <button>Start Predicting</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Predict;
