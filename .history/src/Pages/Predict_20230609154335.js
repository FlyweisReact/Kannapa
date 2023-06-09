/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Layout/Navbar";
import PredictSlider from "../Components/Sliders/PredictSlider";

const Predict = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [question, setQuestion] = useState(false);

  return (
    <>
      <Navbar />

      <div className="Predict_Win">
        <div className="Left_Comp">
          <div className="first">
            <div className="title">
              <img src="./Images/112.png" alt="" />
              <p>Abir Das</p>
            </div>

            <div className="Logo">
              <img src="./Images/113.png" alt="" />
            </div>

            <div className="content">
              <p className="Head">Predict & Win</p>
              <p className="desc">Cricket, Football & Kabaddi</p>
            </div>

            <button onClick={() => setQuestion(true)}>
              Login to particepate
            </button>
          </div>

          <p className="Heading">How To play</p>

          <div className="second">
            <PredictSlider />
          </div>

          <p className="Heading">prizes</p>

          <div className="Third">
            <img src="./Images/115.png" alt="" />
          </div>

          <p className="Heading">Terms & Condition</p>

          <div className="Fourth">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>

        <div className="Right_Comp">
          {question ? (
            <div className="Question_Div">
              <div className="Button_Div">
                <button>Question 1/5</button>
              </div>
              <div className="Question_Content_Div ">
                <div className="two_sec">
                  <div className="empty"></div>
                  <p>
                    The islands with Coral Covered Surfaces in Bay of Bengal are
                  </p>
                </div>

                <div className="Two_Sec" mt-5>
                  <div className="first">
                    <p>A</p>
                  </div>

                  <div className="second">
                    <p>Andaman islands</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="Content">
              <p className="desc">
                Most Complete predict & win platform you can find
              </p>
              <p className="head">Predict & Win</p>
              <p className="desc2">Cricket, Football & Kabaddi</p>
              <button>Start Predicting</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Predict;
