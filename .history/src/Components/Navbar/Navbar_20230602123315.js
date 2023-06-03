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
        <div className="Item">
        <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="DropDown">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="Item">

        </div>
        <div className="Item">

        </div>
        <div className="Item">

        </div>
        <div className="Item">

        </div>
    
          <p>
       
          </p>
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
