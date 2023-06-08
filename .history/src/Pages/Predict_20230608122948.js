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
                    <p>Abir Das</p>
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
