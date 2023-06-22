/** @format */

import { Modal } from "react-bootstrap";

export function PredictWin(props, setQuestion , question) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Predict_Win_Modal">
        <img
          src="./Images/125.png"
          alt=""
          className="Close_Button"
          onClick={() => props.onHide()}
        />

        <div className="Predict_Win">
          

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
                      The islands with Coral Covered Surfaces in Bay of Bengal
                      are
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
                  <button>
                    Next question <img src="./Images/SVG/2.svg" alt="" />{" "}
                  </button>
                </div>
              </div>
            ) : (
              <div className="Content">
                <p className="desc">
                  Most Complete predict & win platform you can find
                </p>
                <p className="head">Predict & Win</p>
                <p className="desc2">Cricket, Football & Kabaddi</p>
                <button onClick={() => setQuestion(true)}>
                  Start Predicting
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
