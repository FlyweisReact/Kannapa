/** @format */

import Slider from "react-slick";

const FrantikZone = ({ handleShow }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
  };

  const data = [1 , 2 , 3 , 4 , 5 , 5, 56 , 45 , 31 , 21 , ]


  return (
    <div className="Overflow_Slider">
      <Slider {...settings} className="Frentik_Slider">
      {data.map((i , index) => (
        <div key={index}>
          <img src="./Images/51.png" alt="" onClick={() => handleShow()} />
          <p>Lorem ipsum</p>
        </div>
      ))}
    
      
      </Slider>
    </div>
  );
};

export default FrantikZone;
