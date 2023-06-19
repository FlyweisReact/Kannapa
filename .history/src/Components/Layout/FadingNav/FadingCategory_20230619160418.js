/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";
import {useNavigate , Link} from 'react-router-dom'

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
              <Link to="/FantasyPreview">
                <p>FANTASY PREVIEWS</p>
              </Link>
            </div>
            <Link to='/predict'>
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

          <Link to='/VideoScreen'>
          <div className="Item">
              <p>VIDEOS</p>
            </div>
          </Link>
            

            <Link to='/AboutUs'>
            <div className="Item">
              <p>ABOUT US</p>
            </div>
            </Link>
        </div>

        <div className="Right_Container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default FadingCategory;
