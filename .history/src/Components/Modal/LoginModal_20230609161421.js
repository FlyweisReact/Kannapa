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
      <div>
        <button>Log In</button>
        <button></button>
      </div>

      </div>
      </Modal.Body>
    </Modal>
  );
}
