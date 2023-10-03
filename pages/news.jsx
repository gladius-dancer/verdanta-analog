import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import NewsBanner from "@/components/NewsBanner/NewsBanner";
import Footer from "@/components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const News = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <MainController>
      {domLoaded && <Navbar />}
      {domLoaded && <NewsBanner />}
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="heading-block heading-5efc816b68b44 tal h-h4">
                <h4 className="h">Recent News.</h4>
              </div>
              <div className="blog-carousel blog-5efc7fef6a0a0">
                <div className="carousel-nav">
                  <div className="prev base-icon-prev-2"></div>
                  <div className="next base-icon-next-2"></div>
                </div>
                {domLoaded && (
                  <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
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
                      prevEl: ".prev",
                      nextEl: ".next",
                    }}
                  >
                    <SwiperSlide>
                      <article className="blog-item category-branding category-design istp-item">
                        <div className="wrap">
                          <div className="img">
                            <div className="author-info-block">
                              <div
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(static/wp-content/uploads/2020/07/promo.jpg)",
                                }}
                              ></div>
                              <div className="content">
                                <div className="name">Promo Theme</div>
                                <div className="date">April 22, 2019</div>
                              </div>
                            </div>
                            <a
                              href="../branding/your-business-partner-for-growth/index.htm"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img1-1024x684.jpg)",
                              }}
                            ></a>
                          </div>
                          <div className="categories">Branding, Design</div>
                          <a
                            className="title"
                            href="../branding/your-business-partner-for-growth/index.htm"
                          >
                            Your business
                          </a>
                          <div className="desc">
                            This study shows us where the pipeline for women and
                            people of color is robust and where more support is
                            needed movies of the p...
                          </div>
                          <div className="button">
                            <a
                              href="../branding/your-business-partner-for-growth/index.htm"
                              className="readmore-link button-style2"
                            >
                              <span>Read more</span>
                              <i className="base-icon-next-2"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide>
                      <article className="blog-item category-creativity category-development istp-item">
                        <div className="wrap">
                          <div className="img">
                            <div className="author-info-block">
                              <div
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(static/wp-content/uploads/2020/07/promo.jpg)",
                                }}
                              ></div>
                              <div className="content">
                                <div className="name">Promo Theme</div>
                                <div className="date">April 22, 2019</div>
                              </div>
                            </div>
                            <a
                              href="../creativity/modern-building/index.htm"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img2-1024x684.jpg)",
                              }}
                            ></a>
                          </div>
                          <div className="categories">
                            Creativity, Development
                          </div>
                          <a
                            className="title"
                            href="../creativity/modern-building/index.htm"
                          >
                            Modern building
                          </a>
                          <div className="desc">
                            This study shows us where the pipeline for women and
                            people of color is robust and where more support is
                            needed movies of the p...
                          </div>
                          <div className="button">
                            <a
                              href="../creativity/modern-building/index.htm"
                              className="readmore-link button-style2"
                            >
                              <span>Read more</span>
                              <i className="base-icon-next-2"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide>
                      <article className="blog-item category-creativity category-design istp-item">
                        <div className="wrap">
                          <div className="img">
                            <div className="author-info-block">
                              <div
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(static/wp-content/uploads/2020/07/promo.jpg)",
                                }}
                              ></div>
                              <div className="content">
                                <div className="name">Promo Theme</div>
                                <div className="date">April 22, 2019</div>
                              </div>
                            </div>
                            <a
                              href="../creativity/roof-beams/index.htm"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img4-1024x853.jpg)",
                              }}
                            ></a>
                          </div>
                          <div className="categories">Creativity, Design</div>
                          <a
                            className="title"
                            href="../creativity/roof-beams/index.htm"
                          >
                            Roof beams
                          </a>
                          <div className="desc">
                            This study shows us where the pipeline for women and
                            people of color is robust and where more support is
                            needed movies of the p...
                          </div>
                          <div className="button">
                            <a
                              href="../creativity/roof-beams/index.htm"
                              className="readmore-link button-style2"
                            >
                              <span>Read more</span>
                              <i className="base-icon-next-2"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide>
                      <article className="blog-item category-creativity category-news istp-item">
                        <div className="wrap">
                          <div className="img">
                            <div className="author-info-block">
                              <div
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(static/wp-content/uploads/2020/07/promo.jpg)",
                                }}
                              ></div>
                              <div className="content">
                                <div className="name">Promo Theme</div>
                                <div className="date">April 22, 2019</div>
                              </div>
                            </div>
                            <a
                              href="../creativity/rooftop-pool/index.htm"
                              style={{
                                backgroundImage:
                                  "url(static/wp-content/uploads/2020/06/img3-1024x781.jpg)",
                              }}
                            ></a>
                          </div>
                          <div className="categories">Creativity, News</div>
                          <a
                            className="title"
                            href="../creativity/rooftop-pool/index.htm"
                          >
                            Rooftop pool
                          </a>
                          <div className="desc">
                            At the end of last year, Bumblebee emerged as one of
                            the big surprise blockbusters of the year. While
                            Transformers movies of th...
                          </div>
                          <div className="button">
                            <a
                              href="../creativity/rooftop-pool/index.htm"
                              className="readmore-link button-style2"
                            >
                              <span>Read more</span>
                              <i className="base-icon-next-2"></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {domLoaded && <Footer />}
    </MainController>
  );
};

export default News;
