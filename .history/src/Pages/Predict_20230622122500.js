/** @format */

import React, { useEffect, useState } from "react";
import NormalHeader from "../Components/shared/NormalHeader";
import PredictSlider from "../Components/Sliders/PredictSlider";
import { PredictWin } from "../Components/Modal/PredictWin";

const Predict = () => {
  const [ modalShow , setModalShow ] = useState(false)
  const [question, setQuestion] = useState(false);
  const [ phoneW , setPhoneW ] = useState(false)
  
  const handlerSelector =  () => {
    if(phoneW ===  true ) {
      setModalShow(true)
      setQuestion(true)
    }else{
      setQuestion(true)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    if(window.innerWidth < 768) {
      setPhoneW(true)
    }

  }, []);


  return (
    <>
      <NormalHeader />
      <PredictWin show={modalShow} onHide={() => setModalShow(false)} setQuestion={setQuestion} question={question} />
  

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

            <button onClick={() => handlerSelector()}>
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

        <div className="Right_Comp Hide_For_Mobile_Special">
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

                <div className="Two_Sec mt-5 Parent">
                  <div className="first ">
                    <p>A</p>
                  </div>

                  <div className="second child_Div">
                    <p>Andaman islands</p>
                  </div>
                </div>
                <div className="Two_Sec ">
                  <div className="first">
                    <p>B</p>
                  </div>

                  <div className="second">
                    <p>Nicobar islands</p>
                  </div>
                </div>
                <div className="Two_Sec ">
                  <div className="first">
                    <p>C</p>
                  </div>

                  <div className="second">
                    <p>both (a) and (b)</p>
                  </div>
                </div>
                <div className="Two_Sec ">
                  <div className="first">
                    <p>D </p>
                  </div>

                  <div className="second">
                    <p>both (a) and (b)</p>
                  </div>
                </div>
              </div>

              <div className="Last_Button_Div">
                <button>Next question <img src='./Images/SVG/2.svg' alt='' />  </button>
              </div>
            </div>
          ) : (
            <div className="Content">
              <p className="desc">
                Most Complete predict & win platform you can find
              </p>
              <p className="head">Predict & Win</p>
              <p className="desc2">Cricket, Football & Kabaddi</p>
              <button onClick={() => handlerSelector()}>Start Predicting</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Predict;
