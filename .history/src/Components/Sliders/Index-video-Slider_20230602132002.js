import React from 'react'
import Slider from 'react-slick';


const IndexVideoSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };


  return (
    <Slider {...settings}>
        <div className="first8itm">
          <img src='/Images/5.png' alt="" />
          <h6>Lorem Ipsum is a dummy text, sed alerm wefv ramkunda </h6>
        </div>
        <div className="first8itm">
          <img src='/Images/6.png' alt="" />
          <h6>Lorem Ipsum is a dummy text, sed alerm wefv ramkunda </h6>
        </div>
        <div className="first8itm">
          <img src="/Images/7.png" alt="" />
          <h6>Lorem Ipsum is a dummy text, sed alerm wefv ramkunda </h6>
        </div>
    </Slider>
  )
}

export default IndexVideoSlider