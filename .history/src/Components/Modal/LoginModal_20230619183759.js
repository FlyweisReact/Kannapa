/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { SignupModal } from "./SignupModal";

export function LoginModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const [ state , setState ] = useState(props.loginopen)

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
       
        </Modal.Body>
      </Modal>
    </>
  );
}
