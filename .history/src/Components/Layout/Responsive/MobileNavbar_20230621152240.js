/** @format */

import React, { useState, useContext } from "react";
import { Dropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginModal } from "../../Modal/LoginModal";
import { MyContext } from "../../MyContext";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setTheme, theme } = useContext(MyContext);
  const [modalState, setModalState] = useState("");
  const [modalShow, setModalShow] = useState(false);

  function ThemeSetter() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        loginopen={modalState}
      />
      <div className="Stick-navbar">
        <div className="Mobile_Navbar">
          <div className="upper">
            {theme === "light" ? (
              <img
                src="./Images/135.png"
                alt=""
                onClick={() => {
                  handleClose();
                  ThemeSetter();
                }}
                className="Toggle_Image"
              />
            ) : (
              <img
                src="./Images/130.png"
                alt=""
                onClick={() => {
                  handleClose();
                  ThemeSetter();
                }}
                className="Toggle_Image"
              />
            )}

            <button
              onClick={() => {
                handleClose();
                setModalState("Login");
                setModalShow(true);
              }}
              className="LoginBtn"
            >
              Login
            </button>
          </div>


          <div className="down">
            <div className="Left_Container">
              <div className="Logo_Div">
                <img
                  src="./Images/logo.png"
                  alt=""
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
            <div className="Right_Container">
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="empty"></div>
              <i className="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <Offcanvas show={show} onHide={handleClose} className="Mobile_Bar">
        <Offcanvas.Body>
          <div className="Close_Button">
            <i className="fa-solid fa-x" onClick={() => handleClose()}></i>
            <i class="fa-regular fa-circle-xmark"></i>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileNavbar;
