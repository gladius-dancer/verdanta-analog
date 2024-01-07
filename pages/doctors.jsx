import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import MainController from "@/components/MainController";

const Doctors = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);
  const mainSliderRef = useRef();
  const syncedSliderRef = useRef();

  const mainAfterChange = (currentSlide) => {
    syncedSliderRef.current.slickGoTo(currentSlide);
  };

  const navAfterChange = (currentSlide) => {
    mainSliderRef.current.slickGoTo(currentSlide);
  };

  let settings = {
    arrows: false,
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <MainController>
        <section
          className="inner-page-banner bg-common inner-page-top-margin"
          style={{
            background:
              "url(../static/images/laser-eye-surgery-what-you-need-to-know.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>
                    <a href="/">Ayziya</a>
                  </h1>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">О клинике</a>
                    </li>
                    <li>
                      <a href="/about">Наши врачи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="isotope-wrap">
            <div className="row featuredContainer" id="no-equal-gallery">
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1583.jpg"
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
                  </div>
                </div>
              </div>
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1555.jpg"
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
                  </div>
                </div>
              </div>
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1408.jpg"
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
                  </div>
                </div>
              </div>
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1412.jpg"
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
                      <a href="/doctors/samandarov-dilmurod/">
                        Самандаров Дильмурод
                      </a>
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/photo-2021-12-15-14-14-08.jpg"
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
                  </div>
                </div>
              </div>
              <div className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team-box-layout2">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1419.jpg"
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
                  </div>
                </div>
              </div>
            </div>
            <ul className="pagination-layout1 margin-t-20">
              <li className="active">
                <a href="/doctors?currPage=1">1</a>
              </li>{" "}
              <li className="">
                <a href="/doctors?currPage=2">2</a>
              </li>{" "}
              <li className="next">
                {" "}
                <a href="/doctors?currPage=2">След. »</a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </MainController>
    </>
  );
};

export default Doctors;
