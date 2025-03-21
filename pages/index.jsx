import { useEffect, useRef, useState } from "react";
import MainController from "@/components/MainController";
import DoctorsSlider from "@/components/DoctorsSlider/DoctorsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { A11y, Autoplay, EffectFade, Navigation } from "swiper/modules";
import Slider from "react-slick";
import Brands from "@/components/Brands/Brands";
import Comments from "@/components/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";
import { GetGalleryService } from "@/services/gallery/GetGalleryService";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import cls from "@/components/Modal/Modal.module.css";
import { GetStatisticsService } from "@/services/statistics/StatisticsService";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const mainSliderRef = useRef();
  const syncedSliderRef = useRef();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state?.doctors?.doctors);
  const gallery = useSelector((state) => state?.gallery?.gallery);
  const stat = useSelector((state) => state?.statistics?.statistics);
  const [modal, setModal] = useState({ status: false, id: null });

  const mainAfterChange = (currentSlide) => {
    syncedSliderRef.current.slickGoTo(currentSlide);
  };

  const navAfterChange = (currentSlide) => {
    mainSliderRef.current.slickGoTo(currentSlide);
  };

  let syncSlider1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    spaceBetween: 5,
    centerPadding: 10,
    arrows: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          centerPadding: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerPadding: 0,
        },
      },
    ],
  };
  let syncSlider2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    setDomLoaded(true);
    dispatch(GetDoctorsService());
    dispatch(GetGalleryService());
    dispatch(GetStatisticsService());
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
              <img src="../static/images/ayziya/11111111.png" alt="slider" />
              <div id="slider-direction-1" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-1">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="text-box">
                        <div className="slider-big-text">
                          AYZIYA
                          <span> Офтальмологический центр</span>
                        </div>
                        <p className="slider-paragraph"></p>
                        <p>Искусство возвращать зрение</p>
                        <p></p>
                        <div className="slider-btn-area">
                          <Link href="/about" className="item-btn">
                            Подробно<i className="fas fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../static/images/ayziya/imgonline-com-ua-Resize-F2IisRZBhbgfmPk.jpg"
                alt="slider"
              />
              <div id="slider-direction-1" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-1">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="text-box">
                        <div className="slider-big-text">
                          AYZIYA
                          <span> Офтальмологический центр</span>
                        </div>
                        <p className="slider-paragraph"></p>
                        <p>Искусство возвращать зрение</p>
                        <p></p>
                        <div className="slider-btn-area">
                          <Link href="/about" className="item-btn">
                            Подробно<i className="fas fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../static/images/ayziya/C14A1043-min2.jpg"
                alt="slider"
              />
              <div id="slider-direction-2" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-2">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="text-box">
                        <div className="slider-big-text">
                          AYZIYA<span> Искусство возвращать зрение </span>
                        </div>
                        <p className="slider-paragraph"></p>
                        <p>Офтальмологический центр</p>
                        <p></p>
                        <div className="slider-btn-area">
                          <Link href="/about" className="item-btn">
                            Подробно<i className="fas fa-chevron-right"></i>
                          </Link>
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
      {/*<section className="about-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="about-box-layout3">
                <h2 className="item-title">О клинике </h2>
                <p></p>
                <p style={{ textAlign: "justify" }}>
                  Офтальмологическая клиника Ayziya предлагает квалифицированную
                  медицинскую помощь по индивидуальным лечебным и
                  профилактическим программам, призванным заботиться о Вашем
                  зрении. Мы используем наиболее современное, соответствующее
                  мировым стандартам, оборудование для диагностики и лечения
                  заболеваний глаз.
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
      </section>*/}
      {/* About Area End Here */}
      {/* Departments Area Start Here */}
      <section className="departments-wrap-layout3 bg-accent100 bg-common">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Услуги</h2>
            <p></p>
          </div>

          <div className="departments-box-layout3">
            <Slider
              {...syncSlider1}
              ref={(slider) => (syncedSliderRef.current = slider)}
              afterChange={navAfterChange}
              className="nav-wrap carousel-nav"
              style={{ background: "#fff" }}
            >
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Оперативное лечение</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Обследование</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Консультация офтальмолога</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Диагностика</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Оперативное лечение</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Обследование</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Консультация офтальмолога</span>
              </div>
              <div className="main-nav-item">
                <i className="flaticon-eye"></i>
                <span>Диагностика</span>
              </div>
            </Slider>

            <Slider
              {...syncSlider2}
              ref={(slider) => (mainSliderRef.current = slider)}
              afterChange={mainAfterChange}
              className="carousel-content"
              style={{ marginTop: 10 }}
            >
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A1043-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Оперативное лечение</h2>
                    <p></p>
                    <Link
                      href="/services/surgical-treatment"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0847-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Обследование</h2>
                    <p></p>
                    <Link href="/services/survey" className="item-btn">
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0759-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Консультация офтальмолога</h2>
                    <p></p>
                    <Link
                      href="/services/surgical-treatment"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0998-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Диагностика</h2>
                    <p></p>
                    <Link href="/services/diagnostics" className="item-btn">
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A1043-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Оперативное лечение</h2>
                    <p></p>
                    <Link
                      href="/services/surgical-treatment"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0847-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Обследование</h2>
                    <p></p>
                    <Link href="/services/survey" className="item-btn">
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0759-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Консультация офтальмолога</h2>
                    <p></p>
                    <Link
                      href="/services/surgical-treatment"
                      className="item-btn"
                    >
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="media ">
                  <div className="item-img">
                    <img
                      src="../static/images/ayziya/C14A0998-min.jpg"
                      alt="department"
                      className="carousel-img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="item-title">Диагностика</h2>
                    <p></p>
                    <Link href="/services/diagnostics" className="item-btn">
                      Подробно{" "}
                    </Link>
                    <div className="ctg-item-icon">
                      <i className="flaticon-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="progress-wrap-layout2 bg-overlay bg-overlay-primary80 bg-common parallaxie">
        <div className="container">
          <div className="row">
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="15">
                  {stat[stat.length - 1]?.doctors}
                </div>
                <p>Опытных врачей</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="60000">
                  {stat[stat.length - 1]?.patients}
                </div>
                <p>Пациентов</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="20000">
                  {stat[stat.length - 1]?.operations}
                </div>
                <p>Проведенных операций</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DoctorsSlider doctors={doctors} />
      <Comments />
      <section className="gallery-wrap-layout1 bg-accent100">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Фотогалерея</h2>
            <p></p>
          </div>
          <div className="isotope-wrap">
            <div className="row featuredContainer zoom-gallery">
              {gallery?.map((item, key) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={key}>
                  <div className="gallery-box-layout1">
                    <img src={item.image} alt="gallery" className="img-fluid" />
                    <div className="item-icon">
                      <a className="popup-zoom">
                        <i
                          className="flaticon-search"
                          onClick={() =>
                            setModal({ status: true, id: item.id })
                          }
                        ></i>
                      </a>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">Ayziya</h3>
                      <span className="title-ctg">Ayziya</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Area End Here */}
      {/* Blog-Area Start Here */}
      {/*<section className="blog-wrap-layout1 bg-accent100">
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
      </section>*/}
      {/* Blog-Area End Here */}
      {/* Brand Area Start Here */}
      <Brands />
      {/* Brand Area End Here */}
      {/* Footer Area Start Here */}
      <Modal
        isOpen={modal.status}
        onRequestClose={() => setModal({ id: null, status: false })}
        modalClass={cls.Modal}
      >
        <div className={cls.ModalContainer}>
          <img src={gallery?.find((item) => item.id === modal.id)?.image} />
        </div>
      </Modal>
    </MainController>
  );
};

export default Index;
