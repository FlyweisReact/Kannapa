import React from 'react'
import Navbar from '../Components/Layout/Navbar'

const LiveScore = () => {
  return (
    <>
        <Navbar />
        <div className="Index_Center_Banner">
          <img src="./Images/1.png" alt="" />
        </div>

        <div className="Live_Score_Three_Buttons">
       <button autoFocus>LIVE</button>
        <button>UPCOMING</button>
        <button>RESULT</button>
      </div>

    </>
  )
}

export default LiveScore