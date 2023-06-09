/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const FadingCategory = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="Fading_Category">
        <div className="Left_Container">
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
        </div>

        <div className="Right_Container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default FadingCategory;
