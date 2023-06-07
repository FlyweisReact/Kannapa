/** @format */

import React from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";

const FantasyPreview = () => {

    const data = [
        {
            img : './Images/83.png' , 
            date : "Champions League" ,
            head : "   AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
            "
        }
    ]


  return (
    <>
      <Navbar />

      <div className="Index_Center_Banner">
        <img src="./Images/1.png" alt="" />
      </div>

      <div className="Fantasy_Three_Sec">
        <div className="Item">
          <p>Format</p>
          <select>
            <option>Select Format</option>
            <option></option>
          </select>
        </div>

        <div className="Item">
          <p>Format</p>
          <select>
            <option>Select Format</option>
            <option></option>
          </select>
        </div>

        <div className="Item_2">
          <button>Clear</button>
        </div>
      </div>

      <div className="Fantasy_Two_Sec">
        <div className="Left_Comp">
          <img src="./Images/82.png" alt="" />
          <p className="date">Chennai Super Kings (CSK)</p>
          <p className="head">
            CSK vs KKR, IPL 2023: ‘They will wait for me to get out’ Ravindra
            Jadeja makes SHOCKING claim regarding his…
          </p>
          <p className="desc">
            CSK vs KKR, IPL 2023: Chennai Super Kings all-rounder Ravindra
            Jadeja replied in an amazing and completely forthright way when
            asked if he…
          </p>
          <div className="two">
            <p>
              By <span>Nishant Singh</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Right_Comp">
          <div className="Item">
            <img src="./Images/83.png" alt="" />
            <p className="date"> Champions League </p>
            <p className="head">
              AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh
              Mkhitaryan…
            </p>
            <div className="two">
              <p>
                By <span>Nishant Singh</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="./Images/86.png" alt="" />
            <p className="date"> Chennai Super Kings (CSK) </p>
            <p className="head">
              CSK vs KKR, IPL 2023: MS Dhoni admits his job…
            </p>
            <div className="two">
              <p>
                By <span>Anukul Chauhan</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="./Images/84.png" alt="" />
            <p className="date"> Featured </p>
            <p className="head">
              Wrestlers Protest LIVE: Minor plaintiff registers statement
              against Brij Bhushan…
            </p>
            <div className="two">
              <p>
                By <span>Anukul Chauhan</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="./Images/82.png" alt="" />
            <p className="date"> Champions League </p>
            <p className="head">
              AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh
              Mkhitaryan…
            </p>
            <div className="two">
              <p>
                By <span>Nishant Singh</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="./Images/84.png" alt="" />
            <p className="date"> Champions League </p>
            <p className="head">
              AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh
              Mkhitaryan…
            </p>
            <div className="two">
              <p>
                By <span>Nishant Singh</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="./Images/86.png" alt="" />
            <p className="date"> Champions League </p>
            <p className="head">
              AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh
              Mkhitaryan…
            </p>
            <div className="two">
              <p>
                By <span>Nishant Singh</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Fantasy_Five_Sec">
        <div className="Item">
          <img src="./Images/83.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/84.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/82.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/85.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta </span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/86.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>

        <div className="Item">
          <img src="./Images/83.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/84.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/82.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/85.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta </span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/86.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>

        <div className="Item">
          <img src="./Images/83.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/84.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/82.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/85.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta </span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/86.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>

        <div className="Item">
          <img src="./Images/83.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/84.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/82.png" alt="" />

          <p className="date"> Featured </p>
          <p className="head">
            Wrestlers Protest LIVE: Minor plaintiff registers statement against
            Brij Bhushan…
          </p>
          <div className="two">
            <p>
              By <span>Anukul Chauhan</span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/85.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta </span>
            </p>
            <p>May 11, 2023</p>
          </div>
        </div>
        <div className="Item">
          <img src="./Images/86.png" alt="" />

          <p className="date"> Champions League </p>
          <p className="head">
            AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…
          </p>
          <div className="two">
            <p>
              By <span>Moumita Dutta</span>
            </p>
            <p>May 11, 2023</p>
          </div>
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

      <Footer />
    </>
  );
};

export default FantasyPreview;
