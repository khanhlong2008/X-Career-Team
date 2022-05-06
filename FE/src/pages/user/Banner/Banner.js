import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="banner-slide">
          <img
            src="https://images.pexels.com/photos/3510717/pexels-photo-3510717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="/"
          />
        </div>

        <div className="banner-slide">
          <img
            src="https://images.pexels.com/photos/8075962/pexels-photo-8075962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="/"
          />
        </div>
        <div className="banner-slide">
          <img
            src="https://images.pexels.com/photos/1094231/pexels-photo-1094231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="/"
          />
        </div>
        <div className="banner-slide">
          <img
            src="https://images.pexels.com/photos/290527/pexels-photo-290527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
