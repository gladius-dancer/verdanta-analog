import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

function MainBanner() {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <div
        className="banner-area starting-banner current-white"
        id="banner-area"
      >
        <div className="banner-item white">
          <div className="bg-overlay">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(static/wp-content/themes/holleta-starting/assets/imgs/bg.jpg)",
              }}
            ></div>
            <div className="color"></div>
          </div>
          {/*{domLoaded && (*/}
          {/*  <div className="bg-overlay">*/}
          {/*    <Swiper*/}
          {/*      effect={"fade"}*/}
          {/*      autoplay={{*/}
          {/*        delay: 2500,*/}
          {/*        disableOnInteraction: false,*/}
          {/*      }}*/}
          {/*      modules={[EffectFade, Autoplay, Navigation, A11y]}*/}
          {/*      slidesPerView={1}*/}
          {/*      loop={true}*/}
          {/*    >*/}
          {/*      <SwiperSlide className="swiper-slide">*/}
          {/*        <div className={cls.bannerItem}>*/}
          {/*          <div className="bg-overlay">*/}
          {/*            <div*/}
          {/*              className="image"*/}
          {/*              style={{*/}
          {/*                backgroundImage:*/}
          {/*                  "url(static/wp-content/uploads/2020/06/img13.jpg)",*/}
          {/*              }}*/}
          {/*            ></div>*/}
          {/*            <div className="color"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide className="swiper-slide">*/}
          {/*        <div className={cls.bannerItem}>*/}
          {/*          <div className="bg-overlay">*/}
          {/*            <div*/}
          {/*              className="image"*/}
          {/*              style={{*/}
          {/*                backgroundImage:*/}
          {/*                  "url(static/wp-content/uploads/2020/06/img12.jpg)",*/}
          {/*              }}*/}
          {/*            ></div>*/}
          {/*            <div className="color"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide className="swiper-slide">*/}
          {/*        <div className={cls.bannerItem}>*/}
          {/*          <div className="bg-overlay">*/}
          {/*            <div*/}
          {/*              className="image"*/}
          {/*              style={{*/}
          {/*                backgroundImage:*/}
          {/*                  "url(static/wp-content/uploads/2020/06/img12.jpg)",*/}
          {/*              }}*/}
          {/*            ></div>*/}
          {/*            <div className="color"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*    </Swiper>*/}
          {/*  </div>*/}
          {/*)}*/}
          <div className="container full-height">
            <div className="content">
              <div className="heading-block">
                <h1 className="h">Hotel Massaget</h1>
              </div>
              <div className="text main-banner-text" suppressHydrationWarning>
                {t(
                  "Welcome to our cozy hotel! We are pleased to offer you comfortable rooms where you can spend a pleasant and relaxing holiday.",
                )}
              </div>
            </div>
            <div className="side-image">
              <div data-depth="0.2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
