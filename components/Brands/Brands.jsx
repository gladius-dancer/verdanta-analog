import React from "react";
import Slider from "react-slick";

let settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
};

function Brands() {
  return (
    <section className="brand-wrap-layout2 bg-light-primary100">
      <div className="container">
        <Slider {...settings}>
          <div className="brand-box-layout3">
            <img
              src="../../static/images/unnamed-1.jpg"
              alt="brand"
              className="img-fluid"
            />
          </div>
          <div className="brand-box-layout3">
            <img
              src="../../static/images/download.png"
              alt="brand"
              className="img-fluid"
            />
          </div>
          <div className="brand-box-layout3">
            <img
              src="../../static/images/huvitz.png"
              alt="brand"
              className="img-fluid"
            />
          </div>
          <div className="brand-box-layout3">
            <img
              src="../../static/images/bauschlomblogo-no-tagline.jpg"
              alt="brand"
              className="img-fluid"
            />
          </div>
          <div className="brand-box-layout3">
            <img
              src="../../static/images/logosonomed.png"
              alt="brand"
              className="img-fluid"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Brands;
