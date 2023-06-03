import React  from "react";
import Slider from "react-slick";


const ScoreCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };

  return (
    <Slider {...settings} className='ScoreCard_Slider' >
    <div className="Main_Item">
            <div className="two_Sec">
                <p className="first">LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

            <div className="T">

            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p>LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p >LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p>LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p>LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p>LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
    <div className="Main_Item">
            <div className="two_Sec">
                <p>LIVE</p>
                <p>Thu 5/11 9:00 am</p>
            </div>

    </div>
  
  </Slider>
  )
}

export default ScoreCard