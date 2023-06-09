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
      <Modal.Body>
        <img src="./Images/125.png" alt="" />
        <p>Contact Us </p>

    <form>
        <div>
            <p>Name *</p>
            <input type='text' />
        </div>
        <div>
            <p>Email address *</p>
            <input type='text' />
        </div>
        <div>
            <p>Message</p>
            <input type='text' />
        </div>
    </form>

      </Modal.Body>
    </Modal>
  );
}
