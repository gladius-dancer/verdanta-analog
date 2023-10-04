import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

function Comments() {
  return (
    <section
      className="testmonial-wrap-layout2 bg-common"
      data-bg-image="/templates/vedanta/assets/img/testimonial/testimonial-bg1.jpg"
    >
      <div className="container">
        <Swiper
          className="rc-carousel dot-control-layout2"
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerGroup={1}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="testmonial-box-layout1">
              <div className="item-img">
                <img
                  src="../../static/images/b055eef2455bc9cddec6994e8160c3ba.jpg"
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="testmonial-box-layout1">
              <div className="item-img">
                <img
                  src="../../static/images/f267de58275174af61b8944a09db282b.jpg"
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Comments;
