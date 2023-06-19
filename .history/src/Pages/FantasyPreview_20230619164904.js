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
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Navbar />

    div className="Index_Center_Banner">
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
            <img src="https://cdn.theathletic.com/cdn-cgi/image/width=1920,format=auto/https://cdn.theathletic.com/app/uploads/2023/03/15125612/kbenz-scaled-e1678899415886-1024x663.jpeg" alt="" />
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
            <img src="https://i.guim.co.uk/img/media/d6cda88cb81b40f9c5b428520482e22103c32c5c/0_292_4499_2700/master/4499.jpg?width=620&quality=85&dpr=1&s=none" alt="" />
            <p className="date"> Champions League </p>
            <p className="head">
            Football transfer rumours: Son Heung-min and Wilfried Zaha to Saudi Arabia?
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
