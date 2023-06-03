/** @format */

import React from "react";
import {Dropdown} from 'react-bootstrap';


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
          <p>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </p>
          <p>FANTASY PREVIEWS</p>
          <p>PREDICT & WIN</p>
          <p>NEWS</p>
          <p>LIVE SCORES</p>
          <p>VIDEOS</p>
          <p>ABOUT US</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
