/** @format */

import { Modal } from "react-bootstrap";

export function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Contact_Modal">
        <img src="./Images/125.png" alt="" className="Close_Button" />
        <p>Contact Us </p>

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
            <textarea rows={5} />
          </div>

          <button>Send</button>
        </form>

        <img src="./Images/11.png" alt="" />
      </Modal.Body>
    </Modal>
  );
}
