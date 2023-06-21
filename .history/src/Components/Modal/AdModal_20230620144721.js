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
      <Modal.Body  className='AdModal'>

      <div className="AdModalTitle">
        <p>
        This Ad Will be closed in 00:0{count}
        </p>
        <i className="fa-sharp fa-solid fa-xmark" ></i>

      </div>

        <img src="./Images/80.png" alt="" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
}
