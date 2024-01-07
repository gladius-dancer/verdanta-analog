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
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);
  const mainSliderRef = useRef();
  const syncedSliderRef = useRef();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state?.doctors?.doctors);
  const isSmallerScreen = useMediaQuery("(max-width:991px)");

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
    dispatch(GetDoctorsService());
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
                    <Link href="/">Ayziya</Link>
                  </h1>
                  <ul>
                    <li>
                      <Link href="">О клинике</Link>
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
                <div className="">
                  <img
                    src="../static/images/ayziya/C14A0998-min.jpg"
                    alt="brand"
                    className="img-fluid"
                  />
                </div>
                <div className="">
                  <img
                    src="../static/images/ayziya/C14A0847-min.jpg"
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
                <h2 className="item-title">Доктор Руслан Султанов</h2>
                <div className="sub-title">
                  <p></p>
                  <p style={{ textAlign: "justify", fontSize: 20 }}>
                    Офтальмохирург. Врач высшей Категории. Закончил НФ
                    Ташкентского Педиатрического Медицинского Института в 2008
                    году. - Проходил клиническую ординатуру по специальности
                    Офтальмология в 2008-2010 году на базе ТАШПМИ. г. Ташкент. -
                    С 2010 по 2011 году работал ассистентом кафедры
                    офтальмологии НФ ТАШПМИ. - С 2011 году по сей день работает
                    офтальмологом в Республиканской Офтальмологической Больнице
                    с 2021 г в ККФ РСНПМЦМГ. - Неоднократно проходил курсы на
                    базе кафедры глазных болезней Таш ИУВ. - В 2012-2020 году
                    работал заведующий поликлиникой в РОБ. - В 2017-2022 году
                    работал заведующий операционным блоком в РОБ. - В 2013 году
                    проходил WETLAB на тему Современные аспекты хирургии
                    катаракты. Факоэмульсификация катаракты г. Астана - В 2015
                    году проходил цикл Факоэмульсификация катаракты г. Сеул
                    Южная Корея, Siloam Eye Hospital. - Ежегодно участвовал в
                    Международных Конгрессе и Конференциях. - С 2023 году
                    работает в Глазной Клинике Айзия.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="about-box-layout12 col-lg-5 col-12">
                <img
                  src="../static/images/ayziya/C14A1029-min2.jpg"
                  alt="about"
                  className="img-fluid"
                  style={{ marginTop: isSmallerScreen ? 0 : 136 }}
                />
              </div>
            </div>
          </div>
        </section>
        <DoctorsSlider doctors={doctors} />
        {/*<Comments />*/}
        <Brands />
      </MainController>
    </>
  );
};

export default About;
