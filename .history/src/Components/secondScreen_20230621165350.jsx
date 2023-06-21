/** @format */
import { useContext, useEffect } from "react";
import Footer from "./Layout/Footer";
import { MyContext } from "./MyContext";
import CenterBanner from "./shared/CenterBanner";
import NormalHeader from "./shared/NormalHeader";

const SecondScreen = () => {
  const { themeClass } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NormalHeader />
      <div style={{ maxWidth: "80%", margin: "auto" }}>
        <CenterBanner />
      </div>

      <div className={themeClass}>
        <div className="News_Two_Sec_layout ">
          <div className="Mid_Comp">
            <div className="Min_Item">
              <img src="./Images/134.png" alt="" />

              <p className="desc">Chennai Super Kings (CSK)</p>
              <p className="head">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p className="content">
                CSK vs KKR, IPL 2023: Chennai Super Kings all-rounder Ravindra
                Jadeja replied in an amazing and completely forthright way when
                asked if he…
              </p>
              <div>
                <p>
                  By <span>Nishant Singh</span>
                </p>
                <p>May 11, 2023</p>
              </div>
            </div>
            <div className="Min_Item mt-4">
              <img
                src="https://talksport.com/wp-content/uploads/sites/5/2023/06/JF-HERO-TALKSPORT-TRANSFERS-BLOG.jpg?strip=all&quality=100&w=1360&h=579&crop=1"
                alt=""
              />

              <p className="desc">Chennai Super Kings (CSK)</p>
              <p className="head">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p className="content">
                CSK vs KKR, IPL 2023: Chennai Super Kings all-rounder Ravindra
                Jadeja replied in an amazing and completely forthright way when
                asked if he…
              </p>
              <div>
                <p>
                  By <span>Nishant Singh</span>
                </p>
                <p>May 11, 2023</p>
              </div>
            </div>
            <div className="Min_Item mt-4">
              <img
                src="https://talksport.com/wp-content/uploads/sites/5/2023/06/JF-HERO-TALKSPORT-TRANSFERS-BLOG.jpg?strip=all&quality=100&w=1360&h=579&crop=1"
                alt=""
              />

              <p className="desc">Chennai Super Kings (CSK)</p>
              <p className="head">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p className="content">
                CSK vs KKR, IPL 2023: Chennai Super Kings all-rounder Ravindra
                Jadeja replied in an amazing and completely forthright way when
                asked if he…
              </p>
              <div>
                <p>
                  By <span>Nishant Singh</span>
                </p>
                <p>May 11, 2023</p>
              </div>
            </div>
            <div className="Min_Item mt-4">
              <img
                src="https://talksport.com/wp-content/uploads/sites/5/2023/06/JF-HERO-TALKSPORT-TRANSFERS-BLOG.jpg?strip=all&quality=100&w=1360&h=579&crop=1"
                alt=""
              />

              <p className="desc">Chennai Super Kings (CSK)</p>
              <p className="head">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p className="content">
                CSK vs KKR, IPL 2023: Chennai Super Kings all-rounder Ravindra
                Jadeja replied in an amazing and completely forthright way when
                asked if he…
              </p>
              <div>
                <p>
                  By <span>Nishant Singh</span>
                </p>
                <p>May 11, 2023</p>
              </div>
            </div>
          </div>

          <div className="Right_Comp">
            <div className="Trading_News">
              <button>Latest News</button>

              <div className="Full_Image">
                <img
                  src="https://i2-prod.mirror.co.uk/incoming/article30150001.ece/ALTERNATES/s1200/0_MAIN-TLB-main.jpg"
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
            <div className="BigImage Hide_This_One">
              <img src="./Images/79.png" alt="" />
            </div>
            <div className="Trading_News mt-3">
              <button>Latest News</button>

              <div className="Full_Image">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/messi-inter-miami-sportstiger-1-1686307265629-original.jpg"
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
            <div className="BigImage Hide_This_One">
              <img src="./Images/79.png" alt="" />
            </div>
            <div className="Trading_News mt-3">
              <button>Latest News</button>

              <div className="Full_Image">
                <img
                  src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/benzema-al-ittihad-ballon-dor-sportstiger-1686297420341-original.jpg"
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
            <div className="BigImage Hide_This_One">
              <img src="./Images/79.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SecondScreen;
