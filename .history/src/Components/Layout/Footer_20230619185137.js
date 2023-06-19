/** @format */
import React, { useState ,useContext } from "react";
import { ContactModal } from "../Modal/ContactModal";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  const { themeClass } = useContext(MyContext);
  return (
    <>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className={`${themeClass}`} style={{paddingTop  : '40px'}}>
      <div className="Footer">
        <div className="Upper_Footer">
          <div className="Left_Comp">
            <img src="./Images/11.png" alt="" />
            <div className="Social_Div">
              <p>Follow us : </p>
              <div>
                <img src="./Images/12.png" alt="" />
                <img src="./Images/13.png" alt="" />
                <img src="./Images/14.png" alt="" />
                <img src="./Images/15.png" alt="" />
                <img src="./Images/16.png" alt="" />
              </div>
            </div>
          </div>
          <div className="Mid_Comp">
            <div className="Upper_Div">
              <p className="head">Quick Links</p>
              <div className="empty"></div>
            </div>

            <ul>
            <Link to="/predict">
              <li>Predict & Win</li>
              </Link>
              <li>Fantasy Previews</li>
              <li>Fantasy Videos</li>
            </ul>
          </div>
          <div className="Right_Comp">
            <div className="Upper_Div">
              <p className="head">Info Links</p>
              <div className="empty"></div>
            </div>

            <div className="Ul_Merge">
              <ul>
                <li onClick={() => setModalShow(true)}>
                  <img src="./Images/17.png" alt="" />
                  Contact Us
                </li>
                <li>
                  {" "}
                  <img src="./Images/18.png" alt="" />
                  About Us
                </li>
                <li>
                  {" "}
                  <img src="./Images/19.png" alt="" />
                  Advertise with Us
                </li>
                <li>
                  {" "}
                  <img src="./Images/20.png" alt="" />
                  Write for us
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <img src="./Images/20.png" alt="" />
                  Disclaimer
                </li>
                <li>
                  {" "}
                  <img src="./Images/20.png" alt="" />
                  DMCA
                </li>
                <li>
                  {" "}
                  <img src="./Images/21.png" alt="" />
                  Privacy Policy
                </li>
                <li>
                  {" "}
                  <img src="./Images/20.png" alt="" />
                  Terms of Use
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Bottom_Footer">
          <div className="empty"></div>
          <p>
            © 2023 <span>Fanatikk</span>. All rights reserved
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
