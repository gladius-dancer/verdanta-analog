import { useEffect, useState } from "react";
import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <MainController>
      {/* Slider Area Start Here */}
      <div className="slider-area slider-layout2 bg-light-primary100 slider-top-margin2">
        <div className="bend">
          <Swiper
            modules={[Navigation, A11y, EffectFade, Autoplay]}
            spaceBetween={30}
            slidesPerGroup={1}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-service",
              nextEl: ".next-service",
            }}
          >
            <SwiperSlide>
              <img
                src="../static/images/laser-eye-surgery-what-you-need-to-know.jpeg"
                alt="slider"
                title="#slider-direction-1"
              />
              <div id="slider-direction-1" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-1">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="text-box">
                        <div className="slider-big-text">
                          VEDANTA
                          <span>
                            {" "}
                            Офтальмологический центр доктора <br /> Акшей Кхера{" "}
                          </span>
                        </div>
                        <p className="slider-paragraph"></p>
                        <p>Искусство возвращать зрение</p>
                        <p></p>
                        <div className="slider-btn-area">
                          <a href="/about" className="item-btn">
                            Подробно<i className="fas fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../static/images/3872170.png"
                alt="slider"
                title="#slider-direction-2"
              />
              <div id="slider-direction-2" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-2">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="text-box">
                        <div className="slider-big-text">
                          VEDANTA<span> Искусство возвращать зрение </span>
                        </div>
                        <p className="slider-paragraph"></p>
                        <p>Офтальмологический центр доктора Акшей Кхера</p>
                        <p></p>
                        <div className="slider-btn-area">
                          <a href="/about" className="item-btn">
                            Подробно<i className="fas fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Slider Area End Here */}
      {/* About Area Start Here */}
      <section className="about-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="about-box-layout3">
                <h2 className="item-title">О клинике </h2>
                <p></p>
                <p style={{ textAlign: "justify" }}>
                  Офтальмологическая клиника Vedanta предлагает
                  квалифицированную медицинскую помощь по индивидуальным
                  лечебным и профилактическим программам, призванным заботиться
                  о Вашем зрении. Мы используем наиболее современное,
                  соответствующее мировым стандартам, оборудование�&nbsp; для
                  диагностики и�&nbsp; лечения заболеваний глаз.
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="about-box-layout4">
                    <div className="media">
                      <div className="item-icon">
                        <i className="flaticon-stethoscope"></i>
                      </div>
                      <div className="media-body space-md">
                        <h3 className="item-title">Современность </h3>
                        <p></p>
                        <p>
                          Современное оборудование, уникальные
                          микрохирургические системы, лазерные установки,
                          аппараты для терапевтического и хирургического
                          лечения.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="about-box-layout4">
                    <div className="media">
                      <div className="item-icon">
                        <i className="flaticon-ambulance"></i>
                      </div>
                      <div className="media-body space-md">
                        <h3 className="item-title">Профессионализм </h3>
                        <p></p>
                        <p>
                          Высококлассные врачи-офтальмологи различных
                          специализаций, чей опыт насчитывает десятилетия
                          активной практической и научной деятельности.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End Here */}
      {/* Departments Area Start Here */}
      <section className="departments-wrap-layout3 bg-accent100 bg-common">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Услуги</h2>
            <p></p>
          </div>
          <div id="slick-carousel-wrap" className="departments-box-layout3">
            <div className="nav-wrap carousel-nav">
              <div className="nav-item">
                <i className="flaticon-eye"></i>Лазерная коррекция
              </div>
              <div className="nav-item">
                <i className="flaticon-eye"></i>Оперативное лечение
              </div>
              <div className="nav-item">
                <i className="flaticon-eye"></i>Обследование
              </div>
              <div className="nav-item">
                <i className="flaticon-eye"></i>Витреоретинальная хирургия
              </div>
              <div className="nav-item">
                <i className="flaticon-eye"></i>Консультация офтальмолога
              </div>
              <div className="nav-item">
                <i className="flaticon-eye"></i>Диагностика
              </div>
            </div>
            <div className="carousel-content">
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1497.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Лазерная коррекция</h2>
                    <p></p>
                    <a
                      href="/services/lazernaya-korrekciya/"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/20230315-145850.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Оперативное лечение</h2>
                    <p></p>
                    <a
                      href="/services/operativnoe-lechenie/"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/dpp-0069.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Обследование</h2>
                    <p></p>
                    <a href="/services/obsledovanie/" className="item-btn">
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1473.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Витреоретинальная хирургия </h2>
                    <p></p>
                    <a
                      href="/services/vitreoretinalnaya-hirurgiya/"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/dpp-0021.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Консультация офтальмолога</h2>
                    <p></p>
                    <a
                      href="/services/konsultaciya-oftalmologa/"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <img
                      src="../static/images/0g7a1394.jpg"
                      alt="department"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Диагностика</h2>
                    <p></p>
                    <a href="/services/diagnostika/" className="item-btn">
                      Подробно{" "}
                    </a>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Departments Area End Here */}
      {/* Progress Area Start Here */}
      <section className="progress-wrap-layout2 bg-overlay bg-overlay-primary80 bg-common parallaxie">
        <div className="container">
          <div className="row">
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="15">
                  15
                </div>
                <p>Опытных врачей</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="60000">
                  60000
                </div>
                <p>Пациентов</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="20000">
                  20000
                </div>
                <p>Проведенных операций</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Progress Area End Here */}
      {/* Team Area Start Here */}
      <section className="team-wrap-layout1 bg-light-secondary100">
        <div className="container">
          <div className="section-heading heading-dark text-left heading-layout1">
            <h2>Наши врачи </h2>
            <p></p>
            <div id="owl-nav2" className="owl-nav-layout1">
              <span className="rt-prev">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span className="rt-next">
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
          <div
            className="rc-carousel nav-control-layout2"
            data-loop="true"
            data-items="5"
            data-margin="30"
            data-autoplay="false"
            data-autoplay-timeout="5000"
            data-custom-nav="#owl-nav2"
            data-smart-speed="2000"
            data-dots="false"
            data-nav="false"
            data-nav-speed="false"
            data-r-x-small="1"
            data-r-x-small-nav="true"
            data-r-x-small-dots="false"
            data-r-x-medium="2"
            data-r-x-medium-nav="false"
            data-r-x-medium-dots="false"
            data-r-small="2"
            data-r-small-nav="false"
            data-r-small-dots="false"
            data-r-medium="3"
            data-r-medium-nav="false"
            data-r-medium-dots="false"
            data-r-large="3"
            data-r-large-nav="false"
            data-r-large-dots="false"
            data-r-extra-large="4"
            data-r-extra-large-nav="false"
            data-r-extra-large-dots="false"
          >
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
                <a href="/doctors/samandarov-dilmurod/" className="item-btn">
                  Подробно{" "}
                </a>
              </div>
            </div>
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
                <a
                  href="/doctors/abdurahmanova-umida-muhammadzhanovna/"
                  className="item-btn"
                >
                  Подробно{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area End Here */}
      {/* Testimonial Area Start Here */}
      <section
        className="testmonial-wrap-layout2 bg-common"
        data-bg-image="/templates/vedanta/assets/img/testimonial/testimonial-bg1.jpg"
      >
        <div className="container">
          <div className="rc-carousel dot-control-layout2">
            <div className="testmonial-box-layout1">
              <div className="item-img">
                <img
                  src="../static/images/b055eef2455bc9cddec6994e8160c3ba.jpg"
                  className="img-fulid rounded-circle"
                  alt="Robert Addison"
                />
              </div>
              <div className="item-content">
                <p style={{ textAlign: "justify" }}>
                  Хотела бы оставить отзыв о клинике Vedanta и выразить огромную
                  благодарность докторам данной Клиники за внимательное
                  отношение , доброту и очень грамотный подход. Нас тепло
                  встретили, проконсультировали и лечили. За время пребывания в
                  клинике у нас было все необходимое , мед.персонал отзывчивый.
                  Огромное спасибо доктору Акшей Кхера - очень грамотный доктор.
                </p>
                <h3 className="item-title">Халилова К.Н.</h3>
                <h4 className="sub-title"></h4>
              </div>
            </div>
            <div className="testmonial-box-layout1">
              <div className="item-img">
                <img
                  src="../static/images/f267de58275174af61b8944a09db282b.jpg"
                  className="img-fulid rounded-circle"
                  alt="Robert Addison"
                />
              </div>
              <div className="item-content">
                <p style={{ textAlign: "justify" }}>
                  Понравилось, что проводят именно комплексную диагностику глаз.
                  Глазное дно смотрят, проверяют давление, остроту зрения, есть
                  для этого вся аппаратура и знаний у врача достаточно. Не
                  жалею, что решила провериться, с врачом долго разговаривали,
                  мне объясняли результаты и дали много ценных
                  советов.�&nbsp;Vedanta - это действительно высокий уровень и
                  профессионализм врачей. Мы остались очень довольны.
                </p>
                <h3 className="item-title">Нарбаева Н.А.</h3>
                <h4 className="sub-title"></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area End Here */}
      {/* Gallery Area Start Here */}
      <section className="gallery-wrap-layout1 bg-accent100">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Фотогалерея</h2>
            <p></p>
          </div>
          <div className="isotope-wrap">
            <div className="row featuredContainer zoom-gallery">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="gallery-box-layout1">
                  <img
                    src="../static/images/0g7a1390.jpg"
                    alt="gallery"
                    className="img-fluid"
                  />
                  <div className="item-icon">
                    <a
                      href="medias/article/big/407/0g7a1390.jpg"
                      className="popup-zoom"
                      data-fancybox-group="gallery"
                      title=""
                    >
                      <i className="flaticon-search"></i>
                    </a>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Диагностика</h3>
                    <span className="title-ctg">Диагностика</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="gallery-box-layout1">
                  <img
                    src="../static/images/0g7a1427.jpg"
                    alt="gallery"
                    className="img-fluid"
                  />
                  <div className="item-icon">
                    <a
                      href="medias/article/big/404/0g7a1427.jpg"
                      className="popup-zoom"
                      data-fancybox-group="gallery"
                      title=""
                    >
                      <i className="flaticon-search"></i>
                    </a>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Диагностика</h3>
                    <span className="title-ctg">Диагностика</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="gallery-box-layout1">
                  <img
                    src="../static/images/0g7a1594.jpg"
                    alt="gallery"
                    className="img-fluid"
                  />
                  <div className="item-icon">
                    <a
                      href="medias/article/big/398/0g7a1594.jpg"
                      className="popup-zoom"
                      data-fancybox-group="gallery"
                      title=""
                    >
                      <i className="flaticon-search"></i>
                    </a>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Vedanta</h3>
                    <span className="title-ctg">Vedanta</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="gallery-box-layout1">
                  <img
                    src="../static/images/0g7a1375.jpg"
                    alt="gallery"
                    className="img-fluid"
                  />
                  <div className="item-icon">
                    <a
                      href="medias/article/big/399/0g7a1375.jpg"
                      className="popup-zoom"
                      data-fancybox-group="gallery"
                      title=""
                    >
                      <i className="flaticon-search"></i>
                    </a>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">�&nbsp;егистратура</h3>
                    <span className="title-ctg">�&nbsp;егистратура</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Area End Here */}
      {/* Blog-Area Start Here */}
      <section className="blog-wrap-layout1 bg-accent100">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Информация</h2>
            <p></p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="single-news.html">
                    <img
                      src="../static/images/138753705-2821715744766172-5982061614764927807-o.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">20.01.2021</div>
                  <h3 className="item-title">
                    <a href="/news/dilemma-koronavirusnoi-epohi-kak-sdelat-tak-chtobi-pri-noshenii-maski-ne-zapotevali-ochki/">
                      Дилемма коронавирусной эпохи: КАК СДЕЛАТЬ ТАК, ЧТОБЫ при
                      ношении маски НЕ ЗАПОТЕВАЛИ ОЧКИ
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/dilemma-koronavirusnoi-epohi-kak-sdelat-tak-chtobi-pri-noshenii-maski-ne-zapotevali-ochki/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="single-news.html">
                    <img
                      src="../static/images/katarakta.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">14.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/diagnostika-i-lechenie-katarakti/">
                      Диагностика и лечение катаракты
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/diagnostika-i-lechenie-katarakti/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="single-news.html">
                    <img
                      src="../static/images/0g7a1590.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">04.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/5-neochevidnih-prichin-poiti-k-oftalmologu/">
                      5 неочевидных причин пойти к офтальмологу
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/5-neochevidnih-prichin-poiti-k-oftalmologu/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog-Area End Here */}
      {/* Brand Area Start Here */}
      <section className="brand-wrap-layout2 bg-light-primary100">
        <div className="container">
          <div className="rc-carousel nav-control-layout4">
            <div className="brand-box-layout3">
              <img
                src="../static/images/logo_1.png"
                alt="brand"
                className="img-fluid"
              />
            </div>
            <div className="brand-box-layout3">
              <img
                src="../static/images/unnamed-1.jpg"
                alt="brand"
                className="img-fluid"
              />
            </div>
            <div className="brand-box-layout3">
              <img
                src="../static/images/download.png"
                alt="brand"
                className="img-fluid"
              />
            </div>
            <div className="brand-box-layout3">
              <img
                src="../static/images/huvitz.png"
                alt="brand"
                className="img-fluid"
              />
            </div>
            <div className="brand-box-layout3">
              <img
                src="../static/images/bauschlomblogo-no-tagline.jpg"
                alt="brand"
                className="img-fluid"
              />
            </div>
            <div className="brand-box-layout3">
              <img
                src="../static/images/logosonomed.png"
                alt="brand"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Brand Area End Here */} {/* Footer Area Start Here */}
    </MainController>
  );
};

export default Index;
