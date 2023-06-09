/** @format */
import { useNa}
import Navbar from "./Layout/Navbar";

const SecondScreen = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="Index_Center_Banner News_Two_Sec_layout">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Index_Three_Sec_Layout Sport_Index_Three_Sec_Layout News_Two_Sec_layout ">
        <div className="Mid_Comp">
          <div className="Blog_Div">
            <p>Latest Updates</p>

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
              <img src="./Images/65.png" alt="" />
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
              <img src="./Images/65.png" alt="" />
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
              <img src="./Images/63.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit
                amet, consetetur Lorem ipsum dolor sit amet, consetetur Lorem
                ipsum dolor sit amet, consetetur
              </p>
            </div>
          </div>
        </div>

        <div className="Right_Comp">
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
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
