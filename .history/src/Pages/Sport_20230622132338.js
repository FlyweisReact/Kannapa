/** @format */

import React, { useEffect ,useContext } from "react";
import Footer from "../Components/Layout/Footer";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import NormalHeader from "../Components/shared/NormalHeader";

const Sport = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <NormalHeader />
      <CenterBanner />
      <div className={`Index_Three_Sec_Layout Sport_Index_Three_Sec_Layout ${themeClass}`}>
        <div className={`Mid_Comp`}>
          <div className={`Blog_Div ${themeClass}`}>
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

        <div className="Right_Comp ">
          <img
            src="./Images/81.png"
            alt=""
            className="Center_Image"\
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sport;
