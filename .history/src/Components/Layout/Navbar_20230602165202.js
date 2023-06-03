/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
    
      <div className="Navbar">
        <div className="Left_Container">
          <div className="Logo_Div">
            <img src="./Images/logo.png" alt="" />
            <p>FANATIKK</p>
          </div>
        </div>

        <div className="Right_Container">
          <div className="Item">
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                id="dropdown-basic"
                className="DropDown"
              >
                SPORTS
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Cricket</Dropdown.Item>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
