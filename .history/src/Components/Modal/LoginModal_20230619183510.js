/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { SignupModal } from "./SignupModal";

export function LoginModal(props) {
  const [openModal, setOpenModal] = useState(false);
  console.log(props.loginopen , "LoginOpen")
  return (
    <>
      <SignupModal show={openModal} onHide={() => setOpenModal(false)} />
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
          <div className="LoginModal">
            <div className="Two_Buttons">
              <button className="first">Log In</button>
              <button
                className="second"
                onClick={() => {
                  props.onHide();
                  setOpenModal(true);
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
        </Modal.Body>
      </Modal>
    </>
  );
}
