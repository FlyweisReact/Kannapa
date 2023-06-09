/** @format */
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export function AdModal(props) {
  const [count, setCount] = useState(8);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="AdModalHeading">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="AdModalTitle"
        >
          This Ad Will be closed in 00:0{count}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: 0 }} className='AdModal'>
      <i class="fa-sharp fa-solid fa-xmark"></i>
        <img src="./Images/80.png" alt="" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
}
