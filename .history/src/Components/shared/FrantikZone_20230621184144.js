/** @format */

import Slider from "react-slick";

const FrantikZone = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="Overflow_Slider">
      <Slider {...settings}>
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
