/** @format */

import { Modal } from "react-bootstrap";

export function LoginModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="LoginModal">
        <img
          src="./Images/125.png"
          alt=""
          className="Close_Button"
          onClick={() => props.onHide()}
        />
      <div className="LoginModal">
      <div className="Two_Buttons">
        <button className="first">Log In</button>
        <button className="second">Sign Up</button>
      </div>

      <form>
        <div className="Main">
        <i class="fa-solid fa-phone"></i>
        <div className="empty"></div>
        <input type='text' placeholder='Phone Number' />
        </div>
        <div className="Main">
        <i class="fa-solid fa-lock"></i>
        <div className="empty"></div>
        <input type='text' placeholder='Phone Number' />
        </div>
      </form>

      </div>
      </Modal.Body>
    </Modal>
  );
}
