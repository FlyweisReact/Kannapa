/** @format */

import { Modal } from "react-bootstrap";

export function PredictWin(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Predict_Win_Modal">
        <img
          src="./Images/125.png"
          alt=""
          className="Close_Button"
          onClick={() => props.onHide()}
        />
            
      </Modal.Body>
    </Modal>
  );
}
