/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";

export function LoginModal(props) {
  const [state, setState] = useState(props.loginopen);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="LoginModal">
          <img
            src="./Images/125.png"
            alt=""
            className="Close_Button"
            onClick={() => props.onHide()}
          />
          {state === "Login" ? (
            <div className="LoginModal">
              <div className="Two_Buttons">
                <button className="first">Log In</button>
                <button
                  className="second"
                  onClick={() => {
                    setState("Signup");
                  }}
                >
                  Sign Up
                </button>
              </div>

              <form>
                <div className="Main">
                  <i className="fa-solid fa-phone"></i>
                  <div className="empty"></div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="Main">
                  <i className="fa-solid fa-lock"></i>
                  <div className="empty"></div>
                  <input type="text" placeholder="OTP" />
                </div>
              </form>

              <div className="Main_Big mt-4">
                <img src="./Images/126.png" alt="" />
                <p>Continue with Facebook</p>
              </div>
              <div className="Main_Big">
                <img src="./Images/127.png" alt="" />
                <p>Continue with Google</p>
              </div>
              <div className="Main_Big">
                <img src="./Images/128.png" alt="" />
                <p>Continue with Apple</p>
              </div>

              <button className="Last_Button">LOG IN</button>

              <img src="./Images/129.png" alt="" className="Logo" />
            </div>
          ) : (
            ""
          )}
          {state === "Signup" ? (
            <div className="LoginModal">
              <div className="Two_Buttons">
                <button className="first" onClick={() => setState("Login")}>
                  Log In
                </button>
                <button className=" second">Sign Up</button>
              </div>

              <form>
                <div className="Main">
                  <i className="fa-solid fa-phone"></i>
                  <div className="empty"></div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="Main">
                  <i className="fa-solid fa-lock"></i>
                  <div className="empty"></div>
                  <input type="text" placeholder="OTP" />
                </div>
              </form>

              <div className="Main_Big mt-4">
                <img src="./Images/126.png" alt="" />
                <p>Continue with Facebook</p>
              </div>
              <div className="Main_Big">
                <img src="./Images/127.png" alt="" />
                <p>Continue with Google</p>
              </div>
              <div className="Main_Big">
                <img src="./Images/128.png" alt="" />
                <p>Continue with Apple</p>
              </div>

              <button className="Last_Button">Sign Up</button>

              <img src="./Images/129.png" alt="" className="Logo" />
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
