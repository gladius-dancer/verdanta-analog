import React from "react";
import Slider from "react-slick";

let doctorsSlider = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function DoctorsSlider() {
  return (
    <section className="team-wrap-layout1 bg-light-secondary100">
      <div className="container">
        <div className="section-heading heading-dark text-left heading-layout1">
          <h2>Наши врачи </h2>
          <p></p>
        </div>
        <Slider {...doctorsSlider}>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="team-box-inner">
              <div className="item-img">
                <img
                  src="../../static/images/0g7a1583.jpg"
                  alt="Team1"
                  className="img-fluid rounded-circle"
                />
                <ul className="item-icon">
                  <li>
                    <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                      <i className="fas fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item-content">
                <h4 className="item-title">
                  <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                    Главный офтальмохирург - Акшей Кхера
                  </a>
                </h4>
                <p></p>
                <a
                  href="/doctors/glavnii-oftalmohirurg-akshei-khera/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default DoctorsSlider;
