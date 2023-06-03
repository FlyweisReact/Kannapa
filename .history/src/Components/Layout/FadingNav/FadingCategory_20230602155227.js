import React from 'react'
import { Dropdown } from "react-bootstrap";

const FadingCategory = () => {
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
              <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </>
      );
}

export default FadingCategory