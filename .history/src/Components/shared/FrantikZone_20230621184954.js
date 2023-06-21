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



  return (
    <div className="Overflow_Slider">
      <Slider {...settings} className="Frentik_Slider">
        <div>
          <img src="./Images/51.png" alt="" onClick={() => handleShow()} />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="./Images/51.png" alt="" />
          <p>Lorem ipsum</p>
        </div>
      </Slider>
    </div>
  );
};

export default FrantikZone;
