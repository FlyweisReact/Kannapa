/** @format */

import React, { useEffect, useContext } from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
import { MyContext } from "../Components/MyContext";
import CenterBanner from "../Components/shared/CenterBanner";
import IndexVideoSlider from "../Components/Sliders/Index-video-Slider";

const News = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <CenterBanner />

      <div className="Index_Center_GIF">
        <img src="./Images/1.gif" alt="" />
      </div>

      <div className={themeClass}>
        <div className="Index_Center_Desc">
          <div className="Main_Comp">
            <p className="head">The prince of pleasure who become king</p>

            <div className="Two_Sec">
              <p>18 May 2023</p>
              <img src="./Images/SVG/1.svg" alt="" />
              <p>History</p>
            </div>

            <div className="desc">
              <p>
                Britain’s King Edward VII has always been something of an
                enigma. A complex man filled with contradictions, he was a
                pioneering royal, while also a philanderer, a boorish
                philistine, and a civilized man of ideas. Using extensive new
                research, this history documentary unravels the mystery of a
                thoroughly modern monarch and reveals that his legacy is still
                relevant today.
              </p>
              <p>
                Watch the full documentary King Edward VII: Prince of Pleasure
                on <u>BBC Select</u>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Index_Logo_Div">
        <div className="Left_Comp">
          {themeClass === "dark" ? (
            <>
              <img src="./Images/2.png" alt="" />
              <img src="./Images/3.png" alt="" />
            </>
          ) : (
            <img src="./Images/132.png" alt="" />
          )}
        </div>
        <div className="Right_Comp">
          <img src="./Images/4.png" alt="" />
        </div>
      </div>

      <div className="Index_Video_Slider">
        <IndexVideoSlider />
      </div>

      <div className="Index_Center_Button">
        <button>More videos </button>
        <div className="empty"></div>
      </div>

      <div className={themeClass}>
        <div className="Index_Three_Cont">
          <div className="Main_Component">
            <img
              src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/108D1/production/_130039776_westham.jpg"
              alt=""
            />
            <p className="head">
              West Ham trophy parade: Thousands gather to celebrate Europa
              Conference League win
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://e0.365dm.com/23/06/1600x900/skysports-moyes-rice-west-ham_6181235.jpg?20230607231733"
              alt=""
            />
            <p className="head">
              Champions League final: Simone Inzaghi - the 'nice guy' who turned
              Inter Milan fortunes around
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://e0.365dm.com/23/05/1600x900/skysports-brighton-liverpool_6172518.jpg?20230529164319"
              alt=""
            />
            <p className="head">
              What next for eight Premier League clubs to have qualified for
              Europe? All you need to know about 2023/24 dates
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://e0.365dm.com/23/05/1600x900/skysports-cody-gakpo-liverpool_6161638.jpg?20230520163721"
              alt=""
            />
            <p className="head">
              Jurgen Klopp insists Liverpool will be Premier League contenders
              next season after ending an underwhelming campaign with a
              thrilling 4-4 draw at relegated Southampton.
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://e0.365dm.com/23/05/1600x900/skysports-premier-league-aston-villa_6171285.jpg?20230528171646"
              alt=""
            />
            <p className="head">
              "The result we achieved this year was incredible, Tony [Bloom], me
              and Paul Barber, we have the dream to improve this result"
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://e0.365dm.com/23/06/1600x900/skysports-moyes-rice-west-ham_6181235.jpg?20230607231733"
              alt=""
            />
            <p className="head">
              West Ham have qualified automatically for the Europa League group
              stages - and a Pot One spot - after their victory in the Europa
              Conference League final.
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/benzema-al-ittihad-ballon-dor-sportstiger-1686297420341-original.jpg"
              alt=""
            />
            <p className="head">
              Karim Benzema brings his Ballon d'Or award at Al-Ittihad
              presentation
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/david-beckham-1686157744831-original.jpg"
              alt=""
            />
            <p className="head">
              David Beckham: Net Worth, Salary, Achievements, Car Collections,
              Records, and More
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
          <div className="Main_Component">
            <img
              src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/jude-beligum-sportstiger-1686150525128-original.jpg"
              alt=""
            />
            <p className="head">
              Borussia Dortmund confirms Jude Bellingham's transfer to Real
              Madrid
            </p>
            <p className="desc">May 10,2023 8:39 PM</p>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default News;
