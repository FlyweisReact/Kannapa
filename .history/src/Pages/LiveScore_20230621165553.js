/** @format */

import React, { useEffect  ,useContext } from "react";
import Footer from "../Components/Layout/Footer";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import NormalHeader from "../Components/shared/NormalHeader";

const LiveScore = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NormalHeader />
      <div className="MaxWidth_Div">
      <CenterBanner />
      </div>
      
      <div className={`Live_Score_Three_Buttons ${themeClass} MaxWidth_Div`}>
        <button autoFocus>LIVE</button>
        <button>UPCOMING</button>
        <button>RESULT</button>
      </div>

      <div className="Live_Score_Two_Sec">
        <div className="Left_Comp">
          <div className={`third5 ${themeClass}`}>
            <p className="Third5_Dark_p">International League T20 2023</p>
            <button>VIEW ALL</button>
          </div>

          <div className={`third6 ${themeClass}`}>
            <div className={`third6itm `}>
              <h4>Bangladesh U19 vs Pakisran..</h4>
              <p>Monday 15, May | 03:00 AM</p>
              <div className="dashed_Border" />
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/89.png" alt="" />
                  <h5>BAN</h5>
                </div>
                <div className="third7r">
                  <h5>5/1 (2)</h5>
                </div>
              </div>
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/87.png" alt="" />
                  <h5>PAK</h5>
                </div>
                <div className="third7r">
                  <h5>244/8 (50)</h5>
                </div>
              </div>
              <p>Bangladesh U19 needs 283 runs in 48 overs remaining.</p>
              <div className="dashed_Border" />
              <button>SCOREBOARD</button>
            </div>
          </div>

          <div className={`third5 ${themeClass} mt-3`}>
            <p className="Third5_Dark_p">International League T20 2023</p>
            <button>VIEW ALL</button>
          </div>

          <div  className={`third6 ${themeClass}`}>
            <div className="third6itm">
              <h4>Bangladesh U19 vs Pakisran..</h4>
              <p>Monday 15, May | 03:00 AM</p>
              <div className="dashed_Border" />
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/89.png" alt="" />
                  <h5>BAN</h5>
                </div>
                <div className="third7r">
                  <h5>5/1 (2)</h5>
                </div>
              </div>
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/87.png" alt="" />
                  <h5>PAK</h5>
                </div>
                <div className="third7r">
                  <h5>244/8 (50)</h5>
                </div>
              </div>
              <p>Bangladesh U19 needs 283 runs in 48 overs remaining.</p>
              <div className="dashed_Border" />
              <button>SCOREBOARD</button>
            </div>
            <div className="third6itm">
              <h4>Bangladesh U19 vs Pakisran..</h4>
              <p>Monday 15, May | 03:00 AM</p>
              <div className="dashed_Border" />
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/89.png" alt="" />
                  <h5>BAN</h5>
                </div>
                <div className="third7r">
                  <h5>5/1 (2)</h5>
                </div>
              </div>
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/87.png" alt="" />
                  <h5>PAK</h5>
                </div>
                <div className="third7r">
                  <h5>244/8 (50)</h5>
                </div>
              </div>
              <p>Bangladesh U19 needs 283 runs in 48 overs remaining.</p>
              <div className="dashed_Border" />
              <button>SCOREBOARD</button>
            </div>
            <div className="third6itm">
              <h4>Bangladesh U19 vs Pakisran..</h4>
              <p>Monday 15, May | 03:00 AM</p>
              <div className="dashed_Border" />
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/89.png" alt="" />
                  <h5>BAN</h5>
                </div>
                <div className="third7r">
                  <h5>5/1 (2)</h5>
                </div>
              </div>
              <div className="third7">
                <div className="third7l">
                  <img src="./Images/87.png" alt="" />
                  <h5>PAK</h5>
                </div>
                <div className="third7r">
                  <h5>244/8 (50)</h5>
                </div>
              </div>
              <p>Bangladesh U19 needs 283 runs in 48 overs remaining.</p>
              <div className="dashed_Border" />
              <button>SCOREBOARD</button>
            </div>
          </div>
        </div>

        <div className="Right_Comp">
          <div className={`third8 ${themeClass}`}>
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

          <div className="third12 HIde_THid_One">
            <img src="./Images/88.png" alt="" />
          </div>

          <div className={`third13 ${themeClass}`}>
            <div className="third14">
              <button>FEATURED VIDEOS</button>
            </div>

            <div className="Merge_In">
              <div className="third15">
                <img
                  src="https://cdn.theathletic.com/cdn-cgi/image/width=1920,format=auto/https://cdn.theathletic.com/app/uploads/2023/03/15125612/kbenz-scaled-e1678899415886-1024x663.jpeg"
                  alt=""
                />
                <h4>
                  Will Benzema leaving Real Madrid create a ripple effect in
                  soccer's summer transfer window?
                </h4>
                <p>May 10,2023 8:39 AM</p>
              </div>

              <div className="third15">
                <img
                  src="https://i.guim.co.uk/img/media/d6cda88cb81b40f9c5b428520482e22103c32c5c/0_292_4499_2700/master/4499.jpg?width=620&quality=85&dpr=1&s=none"
                  alt=""
                />
                <h4>
                  Football transfer rumours: Son Heung-min and Wilfried Zaha to
                  Saudi Arabia?
                </h4>
                <p>May 9, 2023 6:42 PM</p>
              </div>

              <div className="third15">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/robert-lewandowski-sportstiger-1686145977736-original.jpg"
                  alt=""
                />
                <h4>
                  Robert Lewandowski: Age, Height, Net Worth, Salary, Car
                  Collections, Records, Achievements and More
                </h4>
                <p>May 10,2023 8:39 AM</p>
              </div>
              <div className="third15">
                <img
                  src="https://images.daznservices.com/di/library/DAZN_News/d9/2b/lukaku-inbrahimovic-20210126-getty-ftr_1gni8oa6wdqy1vwczx6k00scc.jpg?t=1155752247&quality=60&w=1280&h=720"
                  alt=""
                />
                <h4>
                  AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh
                  Mkhitaryan…
                </h4>
                <p>May 10,2023 8:39 AM</p>
              </div>

              <div className="third15">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/jude-bellingham-sportstiger-1685976157756-original.jpg"
                  alt=""
                />
                <h4>
                  Jude Bellingham: Age, Height, Net Worth, Salary, Car
                  Collections, Records, Achievements and More
                </h4>
                <p>May 9, 2023 6:42 PM</p>
              </div>

              <div className="third15">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/ronaldo-al-nassr-mbappe-psg-sportstiger-1685864887223-original.jpg"
                  alt=""
                />
                <h4>
                  Cristiano Ronaldo-led Al-Nassr to take on Paris Saint-Germain
                  in Japan, date revealed
                </h4>
                <p>May 10,2023 8:39 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LiveScore;
