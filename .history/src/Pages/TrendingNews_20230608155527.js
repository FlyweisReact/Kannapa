import React from 'react'
import Navbar from '../Components/Layout/Navbar'

const TrendingNews = () => {
  return (
    <>
        <Navbar />

        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Live_Score_Two_Sec">
     <div className='Left_Comp'></div>

        <div className="Right_Comp">
          <div className="third8">
            <div className="third9">
              <button style={{width : '50%'}}>TRENDING NEWS <i className="fa-solid fa-fire ml-2"></i></button>
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
        </div>
      </div>

    </>
  )
}

export default TrendingNews