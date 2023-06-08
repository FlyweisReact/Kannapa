/** @format */

import React , { useEffect} from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";

const FantasyPreview = () => {
  const data = [
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/robert-lewandowski-sportstiger-1686145977736-original.jpg",
      date: "Champions League",
      head: "Robert Lewandowski: Age, Height, Net Worth, Salary, Car Collections, Records, Achievements and More",
    },
    {
      img: "https://www.livemint.com/lm-img/img/2023/05/02/600x338/ANI-20230430228-0_1682932070552_1683071105175.jpg",
      date: "Featured",
      head: "Wrestlers Protest LIVE: Minor plaintiff registers statement against Brij Bhushan…",
    },
    {
      img: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2023/05/05/protest-pti-1215625-1683215352-1215692-1683228692-1216173-1683309239.jpg?itok=-53ep8wv",
      date: "Featured",
      head: "Wrestlers Protest LIVE: Minor plaintiff registers statement against Brij Bhushan…",
    },
    {
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6e12a6737d8fca09/64583090bbd0779124be047d/20230506_Giroud_Martinez.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      date: "Champions League",
      head: "  AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…",
    },
    {
      img: "https://e0.365dm.com/23/05/768x432/skysports-ac-milan-inter-milan_6150321.jpg?20230510093209",
      date: "Champions League",
      head: "  AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…",
    },
    {
      img: "https://images.daznservices.com/di/library/DAZN_News/d9/2b/lukaku-inbrahimovic-20210126-getty-ftr_1gni8oa6wdqy1vwczx6k00scc.jpg?t=1155752247&quality=60&w=1280&h=720",
      date: "Champions League",
      head: "AC Milan vs Inter Milan Highlights: Edin Dzeko, Henrikh Mkhitaryan…",
    },
    {
      img: "https://images.indianexpress.com/2023/01/wwwwwrestlers-4col.jpg?w=414",
      date: "Featured",
      head: "Wrestlers Protest LIVE: Minor plaintiff registers statement against Brij Bhushan…",
    },
    {
      img: "https://images.mid-day.com/images/images/2023/apr/wrestlers-protest-april-PTI_d.jpg",
      date: "Featured",
      head: "Wrestlers Protest LIVE: Minor plaintiff registers statement against Brij Bhushan…",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/sportstiger-1-1686145837835-original.jpg",
      date: "Champions League",
      head: "French midfielder N’Golo Kante to join Al Ittihad on free transfer",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/vinicius-jr-sportstiger-1686130273699-original.jpg",
      date: "Champions League",
      head: "Rio de Janeiro legislative assembly approves 'Vinicius Junior Law' to curtail Racism",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/benzema-france-sportstiger-1686038081233-original.jpg",
      date: "Champions League",
      head: "Karim Benzema: Age, Height, Net Worth, Salary, Car Collections, Records, Achievements and More",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/jude-bellingham-sportstiger-1685976157756-original.jpg",
      date: "Featured",
      head: "Jude Bellingham: Age, Height, Net Worth, Salary, Car Collections, Records, Achievements and More",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/zlatan-fifa-23-sportstiger-1685969397679-original.jpg",
      date: "Featured",
      head: "What will happen to Zlatan Ibrahimovic card in FIFA 23 after his retirement?",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/zlatan-sportstiger-1685942296706-original.jpg",
      date: "Champions League",
      head: "Keep Booing: Zlatan Ibrahimovic hits back at Hellas Verona fans during retirement speech - WATCH",
    },
    {
      img: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/ronaldo-al-nassr-mbappe-psg-sportstiger-1685864887223-original.jpg",
      date: "Champions League",
      head: "Cristiano Ronaldo-led Al-Nassr to take on Paris Saint-Germain in Japan, date revealed",
    },
  ];

  useEffect(() => {
    // window.scrollTo(0,0)
  },[])

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
            <img src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/sportstiger-1-1686145837835-original.jpg" alt="" />
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
            <img src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/sportstiger-1685542876756-original.jpg" alt="" />
            <p className="date"> France national team  </p>
            <p className="head">
            Didier Deschamps announces France squad for June’s Euro 2024 qualifiers
            </p>
            <div className="two">
              <p>
                By <span>Anukul Chauhan</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>

          <div className="Item">
            <img src="data:image/jpeg;base64,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" alt="" />
            <p className="date"> Featured </p>
            <p className="head">
            Will Benzema leaving Real Madrid create a ripple effect in soccer's summer transfer window?
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
        {data.map((i, index) => (
          <div className="Item" key={index}>
            <img src={i.img} alt="" />

            <p className="date"> {i.date} </p>
            <p className="head">{i.head}</p>
            <div className="two">
              <p>
                By <span>Moumita Dutta</span>
              </p>
              <p>May 11, 2023</p>
            </div>
          </div>
        ))}
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
