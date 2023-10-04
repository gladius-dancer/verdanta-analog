import MainController from "@/components/MainController";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Services = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
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
                  <a href="/">Vedanta</a>
                </h1>
                <ul>
                  <li>
                    <a href="javascript:void(0)">О клинике</a>
                  </li>
                  <li>
                    <a href="/about">Услуги</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="departments-wrap-layout8">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/20230315-145850.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/operativnoe-lechenie/">
                        Оперативное лечение
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/services/operativnoe-lechenie/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/dpp-0069.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/obsledovanie/">Обследование</a>
                    </h3>
                    <p></p>
                    <a href="/services/obsledovanie/" className="item-btn">
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/0g7a1473.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/vitreoretinalnaya-hirurgiya/">
                        Витреоретинальная хирургия
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/services/vitreoretinalnaya-hirurgiya/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/0g7a1497.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/lazernaya-korrekciya/">
                        Лазерная коррекция
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/services/lazernaya-korrekciya/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/dpp-0021.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/konsultaciya-oftalmologa/">
                        Консультация офтальмолога
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/services/konsultaciya-oftalmologa/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/0g7a1394.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/services/diagnostika/">Диагностика</a>
                    </h3>
                    <p></p>
                    <a href="/services/diagnostika/" className="item-btn">
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination-layout1 margin-t-20"></ul>
        </div>
      </section>
    </MainController>
  );
};

export default Services;
