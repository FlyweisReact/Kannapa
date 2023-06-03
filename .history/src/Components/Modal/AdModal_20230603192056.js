/** @format */

import { Modal } from "react-bootstrap";

export function AdModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "#2965FF",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter"  style={{
          backgroundColor: "#2965FF",
          textAlign: "center",
          color: "#fff",
          textA
        }}>
          This Ad Will be closed in 00:08
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="./Images/80.png" alt="" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
}
