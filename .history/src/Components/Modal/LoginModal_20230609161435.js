/** @format */

import { Modal } from "react-bootstrap";

export function LoginModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Contact_Modal">
        <img
          src="./Images/125.png"
          alt=""
          className="Close_Button"
          onClick={() => props.onHide()}
        />
      <div className="LoginModal">
      <div className="Two_Buttons">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>

      </div>
      </Modal.Body>
    </Modal>
  );
}
