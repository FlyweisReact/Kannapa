import React  from "react";
import Slider from "react-slick";


const ScoreCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };

  return (
    <Slider {...settings} className="Video_Slider">
    <div className="Main_Item">
      <img src="/Images/5.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
    </div>
    <div className="Main_Item">
      <img src="/Images/6.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
    </div>
    <div className="Main_Item">
      <img src="/Images/7.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </div>
    <div className="Main_Item">
      <img src="/Images/5.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </div>
    <div className="Main_Item">
      <img src="/Images/6.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
    </div>
    <div className="Main_Item">
      <img src="/Images/7.png" alt="" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </div>
  </Slider>
  )
}

export default ScoreCard