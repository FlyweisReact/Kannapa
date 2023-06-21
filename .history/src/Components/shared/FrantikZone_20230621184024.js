import Slider from "react-slick";

const FrantikZone = () => {

    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
      };

  return (
    <div  className='Overflow_Slider'>
    <Slider {...settings} >

    </Slider>
  </div>
  )
}

export default FrantikZone