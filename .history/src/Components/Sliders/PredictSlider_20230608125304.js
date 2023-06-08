import React, { useEffect , useRef} from "react";
import Slider from "react-slick";

const PredictSlider = () => {
    const sliderRef = useRef(null);


    useEffect(() => {
      const updateSlideWidth = () => {
        const slideElements = document.querySelectorAll(".Main_Item");
        slideElements.forEach((slide) => {
          slide.style.width = `${slide.parentNode.offsetWidth * 1}px`;
        });
      };
  
      updateSlideWidth();
      window.addEventListener("resize", updateSlideWidth);
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener("resize", updateSlideWidth);
      };
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  

  
    return (
      <>
        <div className="Slider_Container"  >
          <Slider {...settings} className="Blog_Slider">
            <div className="first">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
  
            <div className="first Second">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
  
            <div className="first third">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
  
            <div className="first fourth">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
            <div className="first fifth">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
            <div className="first">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
            <div className="first sixth">
              <div className="desc">
                <p className="Head">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut”
                </p>
                <p className="text">
                  {" "}
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod{" "}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  };

export default PredictSlider