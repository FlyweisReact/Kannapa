/** @format */

import React, { useEffect } from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";

const Sport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="Index_Center_Banner">
        <img src="./Images/1.png" alt="" />
      </div>

      <div className="Index_Three_Sec_Layout Sport_Index_Three_Sec_Layout ">
        <div className="Mid_Comp">
          <div className="Blog_Div">
            <p>Latest Updates</p>

            <div className="Two_Sec">
              <img src="./Images/63.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/66.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/65.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/66.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/63.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/66.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/65.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/66.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>

            <hr />
            <div className="Two_Sec">
              <img src="./Images/63.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>
          </div>
        </div>

        <div className="Right_Comp">
          <img
            src="./Images/81.png"
            alt=""
            className="Center_Image"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sport;
