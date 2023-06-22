/** @format */

import { Modal } from "react-bootstrap";

export function ContactModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Predict_Win_Modal">
        <img
          src="./Images/125.png"
          alt=""
          className="Close_Button"
          onClick={() => props.onHide()}
        />
        <p className="Head">Contact Us </p>

        <form>
          <div>
            <p>Name *</p>
            <input type="text" />
          </div>
          <div>
            <p>Email address *</p>
            <input type="text" />
          </div>
          <div>
            <p>Message</p>
            <textarea rows={2} />
          </div>

          <button>Send</button>
        </form>

        <img src="./Images/11.png" alt="" className="Logo" />
      </Modal.Body>
    </Modal>
  );
}
