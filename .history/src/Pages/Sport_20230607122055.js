import React from 'react'
import Navbar from '../Components/Layout/Navbar'

const Sport = () => {
  return (
    <>
        <Navbar />
        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>


        <div className="Index_Three_Sec_Layout Index_Three_Sec_Layout_2 ">
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
    </>
  )
}

export default Sport