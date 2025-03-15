import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import cls from "./Comments.module.scss";
import clsModal from "@/components/Modal/Modal.module.css";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import { GetReviewsService } from "@/services/reviews/GetReviewsService";
import { useDispatch, useSelector } from "react-redux";

function Comments() {
  const [modal, setModal] = useState({ status: false, url: null });
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    setDomLoaded(true);
    dispatch(GetReviewsService({ page: 1 }));
  }, []);

  return (
    <section
      className="testmonial-wrap-layout2 bg-common"
      data-bg-image="/templates/ayziya/assets/img/testimonial/testimonial-bg1.jpg"
    >
      <div className="container">
        <div className="section-heading heading-dark text-center heading-layout1">
          <h2>Отзывы пациентов</h2>
          <p></p>
        </div>
        <Swiper
          className="rc-carousel dot-control-layout2"
          modules={[Navigation, A11y, Autoplay]}
          slidesPerGroup={1}
          slidesPerView={1}
          loop={true}
          /* autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}*/
          breakpoints={{
            // when window width is >= 640px
            1199: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            992: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 2,
            },
            420: {
              slidesPerView: 1,
            },
          }}
        >
          {reviews?.results.map((review) => (
            <SwiperSlide>
              <div className={cls.sliderItem}>
                <div className="featuredContainer zoom-gallery">
                  <div
                    className="gallery-box-layout1"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <video className="" src={review.video}></video>
                    <div
                      className="item-content"
                      onClick={() =>
                        setModal({
                          url: review.video,
                          status: true,
                        })
                      }
                    >
                      <h3 className="item-title">
                        <img
                          style={{ width: 50, height: "auto", marginTop: 15 }}
                          src="../../static/images/owl.video.play.png"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 20,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <Link href="/reviews">Все отзывы</Link>
        </div>
      </div>
      <Modal
        isOpen={modal.status}
        onRequestClose={() => setModal({ url: null, status: false })}
        modalClass={clsModal.Modal}
      >
        <div className={clsModal.ModalContainer}>
          <video
            autoPlay={true}
            controls
            className={clsModal.video}
            src={modal.url}
          ></video>
        </div>
      </Modal>
    </section>
  );
}

export default Comments;
