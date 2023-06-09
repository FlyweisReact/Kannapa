/** @format */

import React, { useState, useEffect } from "react";
import FadingCategory from "../Components/Layout/FadingNav/FadingCategory";
import FadingNav from "../Components/Layout/FadingNav/FadingNav";
import Header1 from "../Components/Layout/FadingNav/Header1";
import Navbar from "../Components/Layout/Navbar";
import BlogSlider from "../Components/Sliders/Blog-Slider";
import ScoreCard from "../Components/Sliders/ScoreCard";
import TrendingReel from "../Components/Sliders/Trending-Reel";
import Footer from "../Components/Layout/Footer";
import { AdModal } from "../Components/Modal/AdModal";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import InstaSlider from "../Components/Sliders/InstaSlider";

const HomeScreen = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(true);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setModalShow(false);
    }, [8000]);

    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdModal show={modalShow} onHide={() => setModalShow(false)} />
      <section className="HomePage">
        <div className={`${scrolled ? "fade-out" : "fade-in"}`}>
          <Header1 />
          <FadingNav />
          <FadingCategory />
        </div>

        <div className={`${scrolled ? "fade-in" : "fade-out"}`}>
          <Navbar />
        </div>

        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Score_Card_Layout">
          <ScoreCard />
        </div>

        <div className="Index_Three_Sec_Layout">
          <div className="left_Comp">
            <div className="Trading_News">
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
            <div className="BigImage">
              <img src="./Images/37.png" alt="" />
            </div>
          </div>
          <div className="Mid_Comp">
            <BlogSlider />
          </div>

          <div className="Right_Comp">
            <div className="Upper_Div">
              <div className="Main_Item">
                <div className="Three_Sec">
                  <button className="First_Btn">RANKING</button>
                  <div>
                    <button className="First">Men</button>
                    <button>Women</button>
                  </div>
                </div>
              </div>

              <div className="Big_Div">
                <div className="Three_Button">
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

                <table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Team</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
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

            <div className="Down_Div">
              <div className="two_Sec">
                <button>POLL</button>
                <p>2351 votes</p>
              </div>

              <p className="desc">
                Who will win today's match between MI vs GT in IPL?
              </p>

              <p className="bolck_P">MI</p>
              <p className="bolck_P">GT</p>
            </div>
          </div>
        </div>

        <div className="Index_Story_Layout">
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
        <div className="Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ">
          <div className="left_Comp">
            <div className="Trading_News">
              <button>Latest News</button>

              <div className="Full_Image">
                <img src="./Images/58.png" alt="" />
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

          <div className="Mid_Comp">
            <div className="Blog_Div">
              <p>IPL 2023</p>

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
                <img src="./Images/64.png" alt="" />
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

              <div className="Index_Center_Button">
                <button>More videos </button>
                <div className="empty"></div>
              </div>
            </div>
          </div>

          <div className="Right_Comp">
            <img src="./Images/62.png" alt="" className="Center_Image" />
          </div>
        </div>

        <div className="Index_Trending_Reel">
          <p className="Head">Trending Reels</p>
          <TrendingReel />
        </div>

        <div className="Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ">
          <div className="left_Comp">
            <div className="Trading_News">
              <button>Fantasy Videos</button>

              <div className="Full_Image">
                <img src="./Images/67.png" alt="" />
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

            <div className="BigImage">
              <img src="./Images/79.png" alt="" />
            </div>
            <div className="BigImage">
              <img src="./Images/79.png" alt="" />
            </div>
          </div>

          <div className="Mid_Comp">
            <div className="Blog_Div">
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

            <div className="Blog_Div" style={{ marginTop: "20px" }}>
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

            <div className="Pagination_Div">
              <p tabIndex={0}>
                <i className="fa-solid fa-angle-left"></i>
              </p>
              <p tabIndex={0}>1</p>
              <p tabIndex={0}>2</p>
              <p tabIndex={0}>3</p>
              <p tabIndex={0}>4</p>
              <p tabIndex={0}>5 </p>
              <p tabIndex={0}>...</p>
              <p tabIndex={0}>238</p>
              <p tabIndex={0}>
                <i className="fa-solid fa-angle-right"></i>
              </p>
            </div>
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
          <i className="fa-solid fa-x" onClick={() => handleClose()}></i>
          <div className="Index_Story_Layout">
            <div className="Ten_Div">
              <div onClick={handleShow}>
                <img src="./Images/51.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/52.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/53.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/54.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/55.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/56.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/57.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/55.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/56.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div>
                <img src="./Images/57.png" alt="" />
                <p>Lorem ipsum</p>
              </div>
            </div>
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