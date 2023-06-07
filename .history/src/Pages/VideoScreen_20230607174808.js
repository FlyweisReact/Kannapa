/** @format */

import React from "react";
import Navbar from "../Components/Layout/Navbar";

const VideoScreen = () => {
  return (
    <>
      <Navbar />
      <div className="Index_Center_Banner">
        <img src="./Images/1.png" alt="" />
      </div>

      <div className="Live_Score_Two_Sec">
        <div className="Left_Comp">
            <div className="Two_Sec">
            <p>IPL 2023</p>
            <button>View All</button>
            </div>
        </div>

        <div className="Right_Comp">
          <div className="third8">
            <div className="third9">
              <button>LATEST NEWS</button>
            </div>

            <div className="third10">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
              </h4>
              <p>43 minutes ago</p>
            </div>
            <hr className="horizontal2" />
            <div className="third10">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </h4>
              <p>43 minutes ago</p>
            </div>
            <hr className="horizontal2" />
            <div className="third10">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </h4>
              <p>an hour ago</p>
            </div>
            <div className="third10">
              <h4>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam{" "}
              </h4>
              <p>3 hours ago</p>
            </div>
            <hr className="horizontal2" />

            <h3 className="third11">More News...</h3>
          </div>

          <div className="third12">
            <img src="./Images/88.png" alt="" />
          </div>

          <div className="third13">
            <div className="third14">
              <button>FEATURED VIDEOS</button>
            </div>

            <div className="third15">
              <img src="./Images/8.png" alt="" />
              <h4>
                CSK vs DC Dream 11 Prediction | Chennai Super Kings vs Delhi
                Capitals Dream 11 | IPL 2023
              </h4>
              <p>May 10,2023 8:39 AM</p>
            </div>

            <div className="third15">
              <img src="./Images/90.png" alt="" />
              <h4>
                Rashid Khan & Noor Ahmad The Best Spin Duo In IPL 2023? | The
                Afghani Spin Wizards Of Gujarat Titans
              </h4>
              <p>May 9, 2023 6:42 PM</p>
            </div>

            <div className="third15">
              <img src="./Images/10.png" alt="" />
              <h4>
                Rajasthan Royal's Recent Form - A Concern For Sanju Samson |
                What's Going Wrong For Rajasthan Royals
              </h4>
              <p>May 10,2023 8:39 AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoScreen;
