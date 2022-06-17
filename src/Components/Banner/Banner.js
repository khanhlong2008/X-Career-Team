import "./Banner.css"


import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Banner = () => {

   return (
    <div className = "container"> 
      <Slider {...settings}>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" /> 
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/3e/3c/b7/3e3cb7be3fc4a4593b5fb0139ca227de.png' alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
