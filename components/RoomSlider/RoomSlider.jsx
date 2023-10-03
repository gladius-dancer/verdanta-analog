import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import cls from "./RoomSlider.module.css";
import Link from "next/link";

function RoomSlider() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className={cls.roomSlider}>
      <div className="banner-area banner-area-5ef591df91068 banner-with-rooms-carousel stretch-container">
        <div className="banner-slider swiper-container">
          {domLoaded && (
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, A11y]}
              slidesPerView={1}
              loop={true}
            >
              <SwiperSlide className="swiper-slide">
                <div className={cls.bannerItem}>
                  <div className="bg-overlay">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(static/wp-content/uploads/2020/06/img13.jpg)",
                      }}
                    ></div>
                    <div className="color"></div>
                  </div>
                  <div className="container  full-height">
                    <div className="content-row">
                      <div className={cls.bannerHeader}>
                        <h2 className="h h2">Art Apartments.</h2>
                        <div className="clear"></div>
                        <p className="text">
                          World-famous, deeply relaxing. Quality in
                          <br />
                          everything we do.
                        </p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className={cls.bannerItem}>
                  <div className="bg-overlay">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(static/wp-content/uploads/2020/06/img12.jpg)",
                      }}
                    ></div>
                    <div className="color"></div>
                  </div>
                  <div className="container  full-height">
                    <div className="content-row">
                      <div className={cls.bannerHeader}>
                        <h2 className="h h2">Art Apartments.</h2>
                        <div className="clear"></div>
                        <p className="text">
                          World-famous, deeply relaxing. Quality in
                          <br />
                          everything we do.
                        </p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          <div className="progress-line autoplay-on">
            <div></div>
          </div>
        </div>
        <div className="banner-bottom container">
          <div className="right">
            <div className="appartments-carousel rooms-64bfce120a79d popup-gallery gap-on image-type-horizontal">
              <div className="cot">
                {/*<div className="prev base-icon-prev-2"></div>*/}
                {/*<div className="next base-icon-next-2"></div>*/}
                <div className="swiper-container">
                  {domLoaded && (
                    <Swiper
                      modules={[Autoplay, Navigation, A11y]}
                      spaceBetween={5}
                      slidesPerView={1}
                      slidesPerGroup={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      loop={true}
                      breakpoints={{
                        1200: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                      }}
                      navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                      }}
                    >
                      <SwiperSlide className="booking-item istp-item popup-item category-city-grand-hotel swiper-slide">
                        <div className="wrap">
                          <div className="image-block">
                            <Link
                              href="/booking"
                              className="permalink book-button"
                            >
                              Book Now
                            </Link>
                            <div
                              className="image"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img4.jpg)",
                              }}
                            >
                              <a style={{ height: "60px" }}></a>
                            </div>
                            <div className="attributes">
                              <div className="attr">
                                <i className="hotel-icon-single-bed"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-double-bed"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="base-icon-child"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-house-plan-scale"></i>
                                <span>30 m²</span>
                              </div>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="top">
                              <div className="title">Standart Room</div>
                              <div className="price">
                                <span className="mphb-price">
                                  <span className="mphb-currency">&#36;</span>
                                  210
                                </span>
                                <span
                                  className="mphb-price-period"
                                  title="Choose dates to see relevant prices"
                                >
                                  per night
                                </span>
                              </div>
                            </div>
                            <Link href="" className="button-style2">
                              <span>View Details</span>
                              <i className="base-icon-next-2"></i>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="booking-item istp-item popup-item category-city-grand-hotel swiper-slide">
                        <div className="wrap">
                          <div className="image-block">
                            <Link
                              href="/booking"
                              className="permalink book-button"
                            >
                              Book Now
                            </Link>
                            <div
                              className="image"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img12.jpg)",
                              }}
                            >
                              <a style={{ height: "60px" }}></a>
                            </div>
                            <div className="attributes">
                              <div className="attr">
                                <i className="hotel-icon-single-bed"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-double-bed"></i>
                                <span>1</span>
                              </div>
                              <div className="attr">
                                <i className="base-icon-child"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-house-plan-scale"></i>
                                <span>50 m²</span>
                              </div>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="top">
                              <div className="title">Superior Room</div>
                              <div className="price">
                                <span className="mphb-price">
                                  <span className="mphb-currency">&#36;</span>
                                  180
                                </span>
                                <span
                                  className="mphb-price-period"
                                  title="Choose dates to see relevant prices"
                                >
                                  per night
                                </span>
                              </div>
                            </div>
                            <Link href="" className="button-style2">
                              <span>View Details</span>
                              <i className="base-icon-next-2"></i>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="booking-item istp-item popup-item category-city-grand-hotel swiper-slide">
                        <div className="wrap">
                          <div className="image-block">
                            <Link href="" className="permalink book-button">
                              Book Now
                            </Link>
                            <div
                              className="image"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img13.jpg)",
                              }}
                            >
                              <a style={{ height: "60px" }}></a>
                            </div>
                            <div className="attributes">
                              <div className="attr">
                                <i className="hotel-icon-single-bed"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-double-bed"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="base-icon-child"></i>
                                <span>2</span>
                              </div>
                              <div className="attr">
                                <i className="hotel-icon-house-plan-scale"></i>
                                <span>100 m²</span>
                              </div>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="top">
                              <div className="title">
                                <Link href="" className="permalink">
                                  Luxury Room
                                </Link>
                              </div>
                              <div className="price">
                                <span className="mphb-price">
                                  <span className="mphb-currency">&#36;</span>
                                  155
                                </span>
                                <span
                                  className="mphb-price-period"
                                  title="Choose dates to see relevant prices"
                                >
                                  per night
                                </span>
                              </div>
                            </div>
                            <Link href="" className="button-style2">
                              <span>View Details</span>
                              <i className="base-icon-next-2"></i>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomSlider;
