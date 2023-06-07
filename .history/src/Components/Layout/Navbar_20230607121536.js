/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Stick-navbar">
        <div className="Navbar">
          <div className="Left_Container">
            <div className="Logo_Div">
              <img
                src="./Images/logo.png"
                alt=""
                onClick={() => navigate("/")}
              />
              <p onClick={() =>navigate('/') }> FANATIKK</p>
            </div>
          </div>

          <div className="Right_Container">
            <div className="Item">
              <Dropdown>
              <Link
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="DropDown"
                >
                  SPORTS
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ background: "#000" }}>
                  <Dropdown.Item className="DropDown_Item">
                    Cricket
                  </Dropdown.Item>
                  <Dropdown.Item className="DropDown_Item">
                    {" "}
                    Football
                  </Dropdown.Item>
                  <Dropdown.Item className="DropDown_Item">
                    Kabaddi
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="Item">
              <p>FANTASY PREVIEWS</p>
            </div>
            <div className="Item">
              <p>PREDICT & WIN</p>
            </div>
            <div className="Item">
              <p>NEWS</p>
            </div>
            <div className="Item">
              <p>LIVE SCORES</p>
            </div>
            <div className="Item">
              <p>VIDEOS</p>
            </div>
            <div className="Item">
              <p>ABOUT US</p>
            </div>
            <div className="Item">
              <p>ABOUT US</p>
            </div>
            <div className="Item">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="Item">
              <button className="Toggle">
                <img src="./Images/25.png" alt="" />
                <img src="./Images/24.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
