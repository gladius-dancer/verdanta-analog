import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import MainController from "@/components/MainController";
import Brands from "@/components/Brands/Brands";
import Comments from "@/components/Comments/Comments";
import Slider from "react-slick";
import DoctorsSlider from "@/components/DoctorsSlider/DoctorsSlider";

const About = () => {
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
                    <a href="/">Vedanta</a>
                  </h1>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">О клинике</a>
                    </li>
                    <li>
                      <a href="/about">История</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-wrap-layout4">
          <div className="container">
            <div id="slick-carousel-wrap2" className="row about-box-layout10">
              <Slider
                className="col-lg-6 col-md-5 about-img carousel-nav"
                ref={(slider) => (syncedSliderRef.current = slider)}
                afterChange={navAfterChange}
                {...settings}
              >
                <div className="nav-item">
                  <img
                    src="../static/images/0g7a1488.jpg"
                    alt="brand"
                    className="img-fluid"
                  />
                </div>
                <div className="nav-item">
                  <img
                    src="../static/images/0g7a1427.jpg"
                    alt="brand"
                    className="img-fluid"
                  />
                </div>
              </Slider>
              <Slider
                className="col-lg-6 col-md-7 carousel-content about-content"
                ref={(slider) => (mainSliderRef.current = slider)}
                afterChange={mainAfterChange}
                {...settings}
              >
                <div className="single-item">
                  <h2 className="item-title">
                    Современность <span></span>
                  </h2>
                  <p className="sub-title"></p>
                  <p>
                    Современное оборудование, уникальные микрохирургические
                    системы, лазерные установки, аппараты для терапевтического и
                    хирургического лечения.
                  </p>
                  <p></p>
                </div>
                <div className="single-item">
                  <h2 className="item-title">
                    Профессионализм <span></span>
                  </h2>
                  <p className="sub-title"></p>
                  <p>
                    Высококлассные врачи-офтальмологи различных специализаций,
                    чей опыт насчитывает десятилетия активной практической и
                    научной деятельности.
                  </p>
                  <p></p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section className="bg-light-secondary100">
          <div className="container">
            <div className="row">
              <div className="about-box-layout11 col-lg-7 col-12">
                <h2 className="item-title">Доктор Акшей Кхера</h2>
                <div className="sub-title">
                  <p></p>
                  <p style={{ textAlign: "justify" }}>
                    Офтальмологическая клиника Vedanta предлагает
                    квалифицированную медицинскую помощь по индивидуальным
                    лечебным и профилактическим программам, призванным
                    заботиться о Вашем зрении. Мы используем наиболее
                    современное, соответствующее мировым стандартам,
                    оборудование�&nbsp; для диагностики и�&nbsp; лечения
                    заболеваний глаз.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="about-box-layout12 col-lg-5 col-12">
                <img
                  src="../static/images/0g7a1584.jpg"
                  alt="about"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <DoctorsSlider />
        <Comments />
        <Brands />
      </MainController>
    </>
  );
};

export default About;
