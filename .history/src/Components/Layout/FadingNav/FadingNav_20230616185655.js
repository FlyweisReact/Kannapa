/** @format */

import React, { useState, useContext } from "react";
import { LoginModal } from "../../Modal/LoginModal";
import { SignupModal } from "../../Modal/SignupModal";
import { Dropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";

const FadingNav = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setTheme  , theme} = useContext(MyContext);

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <SignupModal show={openModal} onHide={() => setOpenModal(false)} />

      <div className="Fading_Nav">
        <div className="Left_Container">
          <div className="Logo_Div">
            <img src="./Images/logo.png" alt="" />
            {/* <p>FANATIKK</p> */}
          </div>
        </div>

        <div className="Right_Container">
          <i className="fa-solid fa-bars" onClick={handleShow}></i>
          <button onClick={() => setModalShow(true)}>Login</button>
          <button onClick={() => setOpenModal(true)}>Sign Up</button>
          <button className="Toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
            <img src="./Images/25.png" alt="" />
            <img src="./Images/24.png" alt="" />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <Offcanvas show={show} onHide={handleClose} className="Mobile_Bar">
        <Offcanvas.Body>
          <div className="Close_Button">
            <i className="fa-solid fa-x" onClick={() => handleClose()}></i>
          </div>

          <div className="Item">
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                id="dropdown-basic"
                className="DropDown"
              >
                SPORTS
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "#000" }}>
                <Dropdown.Item
                  className="DropDown_Item"
                  onClick={() => navigate("/sport")}
                >
                  Cricket
                </Dropdown.Item>

                <Dropdown.Item className="DropDown_Item">
                  {" "}
                  Football
                </Dropdown.Item>
                <Dropdown.Item className="DropDown_Item">Kabaddi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="Item">
            <Link to="/FantasyPreview">
              <p>FANTASY PREVIEWS</p>
            </Link>
          </div>
          <Link to="/predict">
            <div className="Item">
              <p>PREDICT & WIN</p>
            </div>
          </Link>

          <Link to="/News-Big">
            <div className="Item">
              <p>NEWS</p>
            </div>
          </Link>

          <Link to="/LiveScore">
            <div className="Item">
              <p>LIVE SCORES</p>
            </div>
          </Link>

          <Link to="/VideoScreen">
            <div className="Item">
              <p>VIDEOS</p>
            </div>
          </Link>

          <Link to="/AboutUs">
            <div className="Item">
              <p>ABOUT US</p>
            </div>
          </Link>

          <div className="Item">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="Item">
            <button className="Toggle">
              <img src="./Images/25.png" alt="" />
              <img src="./Images/24.png" alt="" />
            </button>
          </div>
          <button onClick={() => setModalShow(true)} className="LoginBtn">
            Login
          </button>

          <button onClick={() => setOpenModal(true)} className="LoginBtn">
            Sign Up
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FadingNav;
