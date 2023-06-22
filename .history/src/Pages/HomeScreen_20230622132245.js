/** @format */

import React, { useState, useEffect, useContext } from "react";
import BlogSlider from "../Components/Sliders/Blog-Slider";
import ScoreCard from "../Components/Sliders/ScoreCard";
import TrendingReel from "../Components/Sliders/Trending-Reel";
import Footer from "../Components/Layout/Footer";
import { AdModal } from "../Components/Modal/AdModal";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import InstaSlider from "../Components/Sliders/InstaSlider";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import Pagination from "../Components/shared/Pagination";
import Header from "../Components/shared/Header";
import FrantikZone from "../Components/shared/FrantikZone";

const HomeScreen = () => {
  const [modalShow, setModalShow] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { themeClass } = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => {
      setModalShow(false);
    }, [8000]);

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdModal show={modalShow} onHide={() => setModalShow(false)} />

      <section className="HomePage">
        <Header />
        <CenterBanner />

        <div className={`Score_Card_Layout ${themeClass}`}>
          <ScoreCard />
        </div>

        {/* For Mobile  */}
        <div className="Only_For_Mobile">
          <div
            className={`Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ${themeClass}`}
          >
            <div className={`left_Comp ${themeClass}`}>
              <div className={`Trading_News ${themeClass}`}>
                <button>Latest News</button>
                <div className="Full_Image">
                  <img
                    src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/stephen-curry-ronaldo-sportstiger-1686218292996-original.jpg"
                    alt=""
                  />
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempo
                  </p>
                </div>

                <div className="desc">
                  <div className="empty"></div>
                </div>

                <div className="Two_Div">
                  <img src="./Images/59.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <div className="empty"></div>
                </div>
                <div className="Two_Div">
                  <img src="./Images/61.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <div className="empty"></div>
                </div>
                <div className="Two_Div">
                  <img src="./Images/60.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Only_For_Mobile">
          <div className={`Index_Story_Layout  ${themeClass}`}>
            <p className="head">Fanatikk Zone</p>
            <FrantikZone handleShow={handleShow} />
          </div>
        </div>

        <div className="Only_For_Mobile">
          <div className={`Index_Three_Sec_Layout  ${themeClass}`}>
            <div className={`left_Comp  ${themeClass}`}>
              <div className="BigImage ">
                <img src="./Images/37.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Only_For_Mobile">
          <div
            className={`Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ${themeClass}`}
          >
            <div className="left_Comp">
              <div className={`Trading_News ${themeClass}`}>
                <button>Fantasy Videos</button>

                <div className="Full_Image">
                  <img
                    src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/zlatan-ibrahimovic-sportstiger-1686160909872-original.jpg"
                    alt=""
                  />
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempo
                  </p>
                </div>

                <div className="desc">
                  <div className="empty"></div>
                </div>

                <div className="Two_Div">
                  <img src="./Images/68.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <div className="empty"></div>
                </div>
                <div className="Two_Div">
                  <img src="./Images/69.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <div className="empty"></div>
                </div>
                <div className="Two_Div">
                  <img src="./Images/70.png" alt="" />
                  <div>
                    <p className="date">12 May 2023</p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consetetur sa
                    </p>
                  </div>
                </div>
              </div>

              <div className="BigImage Hide_This">
                <img src="./Images/79.png" alt="" />
              </div>
              <div className="BigImage Hide_This">
                <img src="./Images/79.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Only_For_Mobile">
          <div className={`Index_Trending_Reel ${themeClass}`}>
            <p className="Head">Trending Reels</p>
            <TrendingReel />
          </div>
        </div>

        <div className="Only_For_Mobile">
        <div className={`Index_Three_Sec_Layout  ${themeClass}`}>
          <div className="Right_Comp">
            <div className={`Upper_Div ${themeClass}`}>
              <div className="Main_Item">
                <div className="Three_Sec">
                  <button className="First_Btn">RANKING</button>
                  <div>
                    <button className="First">Men</button>
                    <button>Women</button>
                  </div>
                </div>
              </div>

              <div className={`Big_Div ${themeClass}`}>
                <div className={`Three_Button  ${themeClass}`}>
                  <button className="special">TEST</button>
                  <button>ODI</button>
                  <button>T20</button>
                </div>

                <div className="Four_Button">
                  <button className="Special"> Teams</button>
                  <button> Batting</button>
                  <button> Bowling</button>
                  <button> ALR</button>
                </div>

                <table className={`${themeClass}`}>
                  <thead>
                    <tr className={`${themeClass}`}>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody className={`${themeClass}`}>
                    <tr>
                      <td>1</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/38.png" alt="" />
                          India
                        </span>{" "}
                      </td>
                      <td>121</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/39.png" alt="" />
                          Australia
                        </span>{" "}
                      </td>
                      <td>116</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/40.png" alt="" />
                          England
                        </span>{" "}
                      </td>
                      <td>114</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/41.png" alt="" />
                          South Africa
                        </span>{" "}
                      </td>
                      <td>104</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/42.png" alt="" />
                          New Zealand
                        </span>{" "}
                      </td>
                      <td>104</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`Down_Div  ${themeClass}`}>
              <div className="two_Sec">
                <button>POLL</button>
                <p className={` ${themeClass}`}>2351 votes</p>
              </div>

              <p className={`desc ${themeClass}`}>
                Who will win today's match between MI vs GT in IPL?
              </p>

              <p className="bolck_P">MI</p>
              <p className="bolck_P">GT</p>
            </div>
          </div>
        </div>
        </div>

        {/* --------------- */}
        <div className={`Index_Three_Sec_Layout  ${themeClass}`}>
          <div className={`left_Comp  ${themeClass}`}>
            <div className={`Trading_News  ${themeClass} `}>
              <button onClick={() => navigate("/trendingNews")}>
                trending NEWS
                <i class="fa-solid fa-fire"></i>
              </button>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>

              <div className="desc">
                <p className="head">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
                <div className="two_sec">
                  <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 May 2023</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock"></i>
                    <p>2 Min</p>
                  </div>
                </div>
                <div className="empty"></div>
              </div>
            </div>
            <div className="BigImage Hide_This">
              <img src="./Images/37.png" alt="" />
            </div>
          </div>
          <div className="Mid_Comp Hide_On_Tab">
            <BlogSlider />
          </div>

          <div className="Right_Comp">
            <div className={`Upper_Div ${themeClass} Hide_For_Mobile_Special`}>
              <div className="Main_Item">
                <div className="Three_Sec">
                  <button className="First_Btn">RANKING</button>
                  <div>
                    <button className="First">Men</button>
                    <button>Women</button>
                  </div>
                </div>
              </div>

              <div className={`Big_Div ${themeClass}`}>
                <div className={`Three_Button  ${themeClass}`}>
                  <button className="special">TEST</button>
                  <button>ODI</button>
                  <button>T20</button>
                </div>

                <div className="Four_Button">
                  <button className="Special"> Teams</button>
                  <button> Batting</button>
                  <button> Bowling</button>
                  <button> ALR</button>
                </div>

                <table className={`${themeClass}`}>
                  <thead>
                    <tr className={`${themeClass}`}>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody className={`${themeClass}`}>
                    <tr>
                      <td>1</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/38.png" alt="" />
                          India
                        </span>{" "}
                      </td>
                      <td>121</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/39.png" alt="" />
                          Australia
                        </span>{" "}
                      </td>
                      <td>116</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/40.png" alt="" />
                          England
                        </span>{" "}
                      </td>
                      <td>114</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/41.png" alt="" />
                          South Africa
                        </span>{" "}
                      </td>
                      <td>104</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        {" "}
                        <span style={{ display: "flex", gap: "5px" }}>
                          <img src="./Images/42.png" alt="" />
                          New Zealand
                        </span>{" "}
                      </td>
                      <td>104</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`Down_Div  ${themeClass} Hide_For_Mobile_Special`}>
              <div className="two_Sec">
                <button>POLL</button>
                <p className={` ${themeClass}`}>2351 votes</p>
              </div>

              <p className={`desc ${themeClass}`}>
                Who will win today's match between MI vs GT in IPL?
              </p>

              <p className="bolck_P">MI</p>
              <p className="bolck_P">GT</p>
            </div>
          </div>
        </div>

        <div
          className={`Mobile_Tab_Slider_Blog  ${themeClass} `}
          style={{ margin: 0 }}
        >
          <BlogSlider />
        </div>

        <div className={`Index_Story_Layout  ${themeClass} Hide_For_Mobile_Special`}>
          <p className="head">Fanatikk Zone</p>

          <div className="Ten_Div">
            <div onClick={handleShow}>
              <img src="./Images/51.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/52.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/53.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/54.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/55.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/56.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/57.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/55.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/56.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
            <div onClick={handleShow}>
              <img src="./Images/57.png" alt="" />
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>

        {/*  */}

        <div
          className={`Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ${themeClass}`}
        >
          <div className={`left_Comp ${themeClass} `}>
            <div className={`Trading_News ${themeClass} Hide_For_Mobile_Special`}>
              <button>Latest News</button>

              <div className="Full_Image">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/stephen-curry-ronaldo-sportstiger-1686218292996-original.jpg"
                  alt=""
                />
                <p className="date">12 May 2023</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempo
                </p>
              </div>

              <div className="desc">
                <div className="empty"></div>
              </div>

              <div className="Two_Div">
                <img src="./Images/59.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
              <div className="desc">
                <div className="empty"></div>
              </div>
              <div className="Two_Div">
                <img src="./Images/61.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
              <div className="desc">
                <div className="empty"></div>
              </div>
              <div className="Two_Div">
                <img src="./Images/60.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`Mid_Comp ${themeClass}`}>
            <div className={`Blog_Div ${themeClass}`}>
              <p>IPL 2023</p>

              <div className="Two_Sec">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/ngolo-kant-sportstiger-1686147625042-original.jpg"
                  alt=""
                />
                <p>
                  French midfielder N’Golo Kante to join Al Ittihad on free
                  transfer Saudi Pro League clubs have been heavily investing in
                  their league as they have roped in Cristiano Ronaldo, Karim
                  Benzema, and now N’Golo Kante on lucrative deals. Ronaldo
                  joined Al Nassr while Benzem .
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/mumbai-city-fc-striker-ygor-catatau-sportstiger-1686229892450-original.jpg"
                  alt=""
                />
                <p>
                  Former Mumbai City FC striker Ygor Catatau permanently banned
                  from football <br />
                  The Brazilian Sports Court (STJD) banned Catatau, while also
                  handing him a $14000 fine, and his four teammates for their
                  involvement in an illegal betting scheme.
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/vinicius-jr-sportstiger-1686130273699-original.jpg"
                  alt=""
                />
                <p>
                  Rio de Janeiro legislative assembly approves 'Vinicius Junior
                  Law' to curtail Racism
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/messi-intermiami-sportstiger-1686204265845-original.jpg"
                  alt=""
                />
                <p>
                  Welcome Messi: Giannis Antetokounmpo, Kevin Durant and NBA
                  react on Lionel Messi joining Inter Miami
                </p>
              </div>

              <div className="Index_Center_Button">
                <button>More videos </button>
                <div className="empty"></div>
              </div>
            </div>
          </div>

          <div className="Right_Comp ">
            <img src="./Images/62.png" alt="" className="Center_Image" />
          </div>
        </div>

        <div className={`Index_Trending_Reel ${themeClass} Hide_For_Mobile_Special`}>
          <p className="Head">Trending Reels</p>
          <TrendingReel />
        </div>

        <div
          className={`Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ${themeClass}`}
        >
          <div className="left_Comp ">
            <div className={`Trading_News ${themeClass} Hide_For_Mobile_Special`}>
              <button>Fantasy Videos</button>

              <div className="Full_Image">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/zlatan-ibrahimovic-sportstiger-1686160909872-original.jpg"
                  alt=""
                />
                <p className="date">12 May 2023</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempo
                </p>
              </div>

              <div className="desc">
                <div className="empty"></div>
              </div>

              <div className="Two_Div">
                <img src="./Images/68.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
              <div className="desc">
                <div className="empty"></div>
              </div>
              <div className="Two_Div">
                <img src="./Images/69.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
              <div className="desc">
                <div className="empty"></div>
              </div>
              <div className="Two_Div">
                <img src="./Images/70.png" alt="" />
                <div>
                  <p className="date">12 May 2023</p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sa
                  </p>
                </div>
              </div>
            </div>

            <div className="BigImage ">
              <img src="./Images/79.png" alt="" />
            </div>
            <div className="BigImage ">
              <img src="./Images/79.png" alt="" />
            </div>
          </div>

          <div className={`Mid_Comp ${themeClass}`}>
            <div className={`Blog_Div ${themeClass}`}>
              <p>IPL 2023</p>

              <div className="Two_Sec">
                <img src="./Images/72.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img src="./Images/73.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img src="./Images/74.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img src="./Images/75.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <div className="Index_Center_Button">
                <button onClick={() => navigate("/sport")}>
                  More CRICKET News{" "}
                </button>
                <div className="empty"></div>
              </div>
            </div>

            <div
              className={`Blog_Div ${themeClass}`}
              style={{ marginTop: "20px" }}
            >
              <p>IPL 2023</p>

              <div className="Two_Sec">
                <img src="./Images/76.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img src="./Images/77.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <hr />
              <div className="Two_Sec">
                <img src="./Images/78.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                  amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                  ipsum dolor sit amet, consetetur
                </p>
              </div>

              <div className="Index_Center_Button">
                <button>More FOOTBALL News </button>
                <div className="empty"></div>
              </div>
            </div>
            <Pagination />
          </div>

          <div className="Right_Comp">
            <img
              src="./Images/71.png"
              alt=""
              className="Center_Image"
              style={{ height: "100%" }}
            />
          </div>
        </div>

        <Footer />
      </section>

      {/* Story Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="Fullscreen_Offcanvas"
      >
        <Offcanvas.Body className="Off_Body">
          <div className="Close_Button">
            <i className="fa-solid fa-x" onClick={() => handleClose()}></i>
          </div>
          <div className="Story_Slider_Layout">
            <InstaSlider />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeScreen;
