/** @format */

import Slider from "react-slick";

const FrantikZone = () => {
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 1500,
      };

  return (
    <div className="Overflow_Slider">
      <Slider {...settings} className='Frentik_Slider'>
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
