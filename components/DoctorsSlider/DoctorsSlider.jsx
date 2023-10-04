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
          <div className="team-box-layout2">
            <div className="item-img">
              <img
                src="../../static/images/0g7a1555.jpg"
                alt="Team1"
                className="img-fluid rounded-circle"
              />
              <ul className="item-icon">
                <li>
                  <a href="/doctors/abdullaeva-nodira-bahtiyarovna/">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item-content">
              <h4 className="item-title">
                <a href="/doctors/abdullaeva-nodira-bahtiyarovna/">
                  Абдуллаева Нодира Бахтияровна
                </a>
              </h4>
              <p></p>
              <a
                href="/doctors/abdullaeva-nodira-bahtiyarovna/"
                className="item-btn"
              >
                Подробно{" "}
              </a>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="item-img">
              <img
                src="../../static/images/0g7a1408.jpg"
                alt="Team1"
                className="img-fluid rounded-circle"
              />
              <ul className="item-icon">
                <li>
                  <a href="/doctors/nizamhodzhaev-sharofiddin/">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item-content">
              <h4 className="item-title">
                <a href="/doctors/nizamhodzhaev-sharofiddin/">
                  Низамходжаев Шарофиддин
                </a>
              </h4>
              <p></p>
              <a
                href="/doctors/nizamhodzhaev-sharofiddin/"
                className="item-btn"
              >
                Подробно{" "}
              </a>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="item-img">
              <img
                src="../../static/images/0g7a1412.jpg"
                alt="Team1"
                className="img-fluid rounded-circle"
              />
              <ul className="item-icon">
                <li>
                  <a href="/doctors/samandarov-dilmurod/">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item-content">
              <h4 className="item-title">
                <a href="/doctors/samandarov-dilmurod/">Самандаров Дильмурод</a>
              </h4>
              <p></p>
              <a href="/doctors/samandarov-dilmurod/" className="item-btn">
                Подробно{" "}
              </a>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="item-img">
              <img
                src="../../static/images/photo-2021-12-15-14-14-08.jpg"
                alt="Team1"
                className="img-fluid rounded-circle"
              />
              <ul className="item-icon">
                <li>
                  <a href="/doctors/niezmetov-noufar-norimboevich/">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item-content">
              <h4 className="item-title">
                <a href="/doctors/niezmetov-noufar-norimboevich/">
                  Ниезметов Ноуфар Норимбоевич
                </a>
              </h4>
              <p></p>
              <a
                href="/doctors/niezmetov-noufar-norimboevich/"
                className="item-btn"
              >
                Подробно{" "}
              </a>
            </div>
          </div>
          <div className="team-box-layout2">
            <div className="item-img">
              <img
                src="../../static/images/0g7a1419.jpg"
                alt="Team1"
                className="img-fluid rounded-circle"
              />
              <ul className="item-icon">
                <li>
                  <a href="/doctors/abdurahmanova-umida-muhammadzhanovna/">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="item-content">
              <h4 className="item-title">
                <a href="/doctors/abdurahmanova-umida-muhammadzhanovna/">
                  Абдурахманова Умида Мухаммаджановна
                </a>
              </h4>
              <p></p>
              <a
                href="/doctors/abdurahmanova-umida-muhammadzhanovna/"
                className="item-btn"
              >
                Подробно{" "}
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default DoctorsSlider;
