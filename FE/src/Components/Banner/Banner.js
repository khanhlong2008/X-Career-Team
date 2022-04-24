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
            src="https://inhat.vn/wp-content/uploads/2021/03/Shop-quan-ao-nu-sexy-ngau-6.png"
            alt="/"
          />
        </div>

        <div className="banner-slide">
          <img
            src="https://cf.shopee.vn/file/051cbc053410211dfaf5faeacee6d1e3"
            alt="/"
          />
        </div>
        <div className="banner-slide">
          <img
            src="https://zerdio.com.vn/wp-content/uploads/2021/04/cool-ngau-nu.jpeg"
            alt="/"
          />
        </div>
        <div className="banner-slide">
          <img
            src="https://i.pinimg.com/originals/8d/6e/52/8d6e52b41a234a1a655b59b6ab150c3a.jpg"
            alt="/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
