import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import AboutBanner from "@/components/AboutBanner/AboutBanner";
import Footer from "@/components/Footer/Footer";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";

const Services = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <MainController>
      {domLoaded && <Navbar />}
      <ServicesBanner />
      <main className="main-container">
        <div className="container">
          <div className="vc_row wpb_row about-info">
            <div className="side-image-with-content about-content">
              <div
                className="image about-image-content"
                style={{
                  backgroundImage:
                    "url(static/wp-content/uploads/2020/06/img1.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="about-text-content">
                <div className="heading-block">
                  <h4 className="h" suppressHydrationWarning>
                    {t("Discover a hotel features in a new path of city.")}
                  </h4>
                </div>

                <div className="">
                  <p suppressHydrationWarning>
                    {t(
                      "We are glad to welcome you to the Massaget Hotel, which is famous for its oriental hospitality and is located in the very center of Nukus! It offers cozy rooms with air conditioning and a flat-screen TV - everything for your comfortable stay. The Massaget Hotel offers classically furnished rooms and suites. The interiors are decorated with wooden furniture and elegant fabrics. There are many attractions, shops and cafes very close to the hotel. Staff at the 24-hour front desk can arrange a shuttle service to Nukus Airport, which is 2 km away. Welcome to the Massaget Hotel!",
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="side-image-with-content about-content">
              <div
                className="about-image-content-right"
                style={{
                  backgroundImage:
                    "url(static/wp-content/uploads/2020/06/img1.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="about-text-content-right">
                <div className="heading-block">
                  <h4 className="h" suppressHydrationWarning>
                    {t("Conference hall")}
                  </h4>
                </div>

                <div className="">
                  <p suppressHydrationWarning>
                    {t(
                      "The conference hall 'Massaget' is ready to offer its guests not only a cozy atmosphere and a beautiful interio. We are also ready to offer a variety of drinks so that your event meets the requirements of international standards. A great opportunity for you to hold various kinds of events in the conference hall 'Massaget' from 20 to 100 people!",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-video">
          <div className="container">
            <div className="services-video-inner">
              <div className="heading-block services-video-text">
                <div className="h h4">Excellent service.</div>
                <div className="text">
                  As important as strategy is, we have to execute to win.
                  Execution involves every employee and every relation we have
                  with customers. We must operate quickly on problems, drive
                  results, not just activities.
                </div>
              </div>
              <div className="video-button-block">
                <div className="video-button single-popup-item">
                  <span className="icon">
                    <i className="base-icon-play-button"></i>
                  </span>
                  <span>Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="vc_row wpb_row vc_row-fluid vc_row-5ef07c0b7d8d2 ">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-9 ">
              <div className="vc_column-inner ">
                <div className="icon-box-block icon-box-block-5eecbef1fe64d">
                  <div className="nav-arrows">
                    <div className="prev-service base-icon-prev-2"></div>
                    <div className="next-service base-icon-next-2"></div>
                  </div>
                  <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    navigation={{
                      prevEl: ".prev-service",
                      nextEl: ".next-service",
                    }}
                  >
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf09137ec">
                        <div className="icon hotel-icon-bed-2"></div>
                        <div className="wrap">
                          <h6 className="title">Orthopedic beds</h6>
                          <div className="desc">
                            Only live communication and scrupulous study of the
                            nuances of the task.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf2734f13">
                        <div className="icon hotel-icon-herbal"></div>
                        <div className="wrap">
                          <h6 className="title">Vegetarian cuisine</h6>
                          <div className="desc">
                            We support programs that create advancement
                            opportunities for people.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf5a8c15c">
                        <div className="icon hotel-icon-coffee-cup"></div>
                        <div className="wrap">
                          <h6 className="title">Custom coffee</h6>
                          <div className="desc">
                            We are using our strengths to not
                            <br />
                            only further work in our own operations.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf09137ec">
                        <div className="icon hotel-icon-bed-2"></div>
                        <div className="wrap">
                          <h6 className="title">Orthopedic beds</h6>
                          <div className="desc">
                            Only live communication and scrupulous study of the
                            nuances of the task.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf2734f13">
                        <div className="icon hotel-icon-herbal"></div>
                        <div className="wrap">
                          <h6 className="title">Vegetarian cuisine</h6>
                          <div className="desc">
                            We support programs that create advancement
                            opportunities for people.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="icon-box icon-box-style-5eecbf5a8c15c">
                        <div className="icon hotel-icon-coffee-cup"></div>
                        <div className="wrap">
                          <h6 className="title">Custom coffee</h6>
                          <div className="desc">
                            We are using our strengths to not
                            <br />
                            only further work in our own operations.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="menu-overlay"></div>
      {domLoaded && <Footer />}
    </MainController>
  );
};

export default Services;
