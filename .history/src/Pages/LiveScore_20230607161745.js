import React from 'react'
import Navbar from '../Components/Layout/Navbar'

const LiveScore = () => {
  return (
    <>
        <Navbar />
        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Live_Score)">
       <button className="third2">LIVE</button>
        <button className="third3">UPCOMING</button>
        <button className="third3">RESULT</button>
      </div>

    </>
  )
}

export default LiveScore