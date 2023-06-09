/** @format */

import React, { useEffect, useContext } from "react";
import Footer from "../Components/Layout/Footer";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import NormalHeader from "../Components/shared/NormalHeader";

const VideoScreen = () => {
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
      <div className={themeClass}>
        <div className={`Live_Score_Two_Sec Video_Screen MaxWidth_Div`}>
          <div className="Left_Comp">
            <div className="Two_Sec">
              <p>IPL 2023</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://ipl.ae/wp-content/uploads/2023/04/Match-33.webp"
                  alt=""
                />
                <p className="head">
                  IPL 2023 | CSK vs KKR : Match-61 | Post Match Analysis
                </p>
                <p className="date">14 May 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/04/ipl-2023kkr-vs-csk-highlights-1682252719.jpg"
                  alt=""
                />
                <p className="head">
                  IPL 2023 | CSK vs KKR : Match-61 | Post Match Analysis
                </p>
                <p className="date">14 May 2023</p>
              </div>
            </div>

            <div className="Two_Sec">
              <p>IND vs AUS 2023 Series</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://images.thequint.com/thequint/2022-09/8acde848-8eee-4714-847d-55f438fc9c47/hero_image__2_.jpg"
                  alt=""
                />
                <p className="head">
                  IND vs AUS 3rd ODI Match | Post Match Analysis
                </p>
                <p className="date">22 Mar 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/ind-aus-highlights-3odi-1679504711.jpg"
                  alt=""
                />
                <p className="head">
                  IND vs AUS 3rd ODI Mid Innings Analysis | WATCH LIVE{" "}
                </p>
                <p className="date">14 May 2023</p>
              </div>
            </div>
            <div className="Two_Sec">
              <p>IND vs NZ 2023 Series</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://images.indianexpress.com/2023/01/india-vs-new-zealand.jpg"
                  alt=""
                />
                <p className="head">
                  IND vs NZ 3rd T20I | LIVE | POST MATCH ANALYSIS
                </p>
                <p className="date">01 Feb 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/01/28/1146576-whatsapp-image-2023-01-27-at-1.43.52-pm.jpeg"
                  alt=""
                />
                <p className="head">
                  IND vs NZ 3rd T20I | LIVE | MID INNINGS ANALYSIS
                </p>
                <p className="date">01 Feb 2023</p>
              </div>
            </div>
            <div className="Two_Sec">
              <p>IND vs AUS 2023 Series</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://images.thequint.com/thequint%2F2023-06%2Fa9b0a772-f034-41eb-980f-77b7ddf79622%2FIndia_vs_Australia_WTC_Final_2023.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200"
                  alt=""
                />
                <p className="head">
                  IND vs AUS 3rd ODI Match | Post Match Analysis
                </p>
                <p className="date">22 Mar 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9434/1509434-h-d6e5670b5f12"
                  alt=""
                />
                <p className="head">
                  IPL 2023 | CSK vs KKR : Match-61 | Post Match Analysis
                </p>
                <p className="date">14 May 2023</p>
              </div>
            </div>
            <div className="Two_Sec">
              <p>ICC Men's T20 WC 2022</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://www.insidesport.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-19-at-12.52.43.jpg?w=690"
                  alt=""
                />
                <p className="head">
                  IND vs AUS 3rd ODI Match | Post Match Analysis
                </p>
                <p className="date">22 Mar 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://www.india.com/wp-content/uploads/2014/05/csk-vs-kkr.jpg"
                  alt=""
                />
                <p className="head">
                  IPL 2023 | CSK vs KKR : Match-61 | Post Match Analysis
                </p>
                <p className="date">14 May 2023</p>
              </div>
            </div>
            <div className="Two_Sec">
              <p>SA tour of IND 2022</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/India-vs-Australia-2nd-T20I.jpg?fit=1200%2C675&ssl=1"
                  alt=""
                />
                <p className="head">
                  IND vs AUS 3rd ODI Match | Post Match Analysis
                </p>
                <p className="date">22 Mar 2023</p>
              </div>
              <div className="Item">
                <img
                  src="https://images.moneycontrol.com/static-mcnews/2022/03/R-Jadeja-Shreyas-Iyer-770x433.jpg"
                  alt=""
                />
                <p className="head">
                  IPL 2023 | CSK vs KKR : Match-61 | Post Match Analysis
                </p>
                <p className="date">14 May 2023</p>
              </div>
            </div>
            <div className="Two_Sec">
              <p>IPL 2023 Mini-Auction</p>
              <button>View All</button>
            </div>

            <div className="Two_Sec_Div">
              <div className="Item">
                <img
                  src="https://instagamio.com/blog/wp-content/uploads/2022/12/IPL-Auction-2023-1.jpg"
                  alt=""
                />
                <p className="head">
                  IPL 2023 Mini Auction LIVE STREAMING | IPL 2023 Auction Live
                </p>
                <p className="date">23 Dec 2022</p>
              </div>
              <div className="Item">
                <img
                  src="https://www.indiaherald.com/Assets/ArticleUpload/202292319220364_iplhome-1631619520-1663934426.jpg"
                  alt=""
                />
                <p className="head">
                  IPL 2023 Auction Update | Players List, Price Tag, Targeting
                  Teams and More | IPL 2023 Auction
                </p>
                <p className="date">23 Dec 2022</p>
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
                    Rashid Khan & Noor Ahmad The Best Spin Duo In IPL 2023? |
                    The Afghani Spin Wizards Of Gujarat Titans
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VideoScreen;
