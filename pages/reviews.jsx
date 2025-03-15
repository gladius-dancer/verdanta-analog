import MainController from "@/components/MainController";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { GetReviewsService } from "@/services/reviews/GetReviewsService";
import cls from "@/components/Comments/Comments.module.scss";
import clsModal from "@/components/Modal/Modal.module.css";
import Modal from "@/components/Modal/Modal";

const Reviews = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [modal, setModal] = useState({ status: false, url: null });
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);

  const pages = [];

  for (let i = 1; i <= Math.ceil(reviews?.count / 12); i++) {
    pages.push({ pageNumber: i });
  }

  const onSetActivePage = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setDomLoaded(true);
    dispatch(GetReviewsService({ page: activePage, page_size: 12 }));
  }, [activePage]);

  return (
    <MainController>
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{
          backgroundImage:
            "url(../static/images/laser-eye-surgery-what-you-need-to-know.jpeg)",
          backgroundRepeat: "no-repeat",
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
                    <Link href="/reviews">Отзывы пациентов</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrap-layout1 bg-accent100">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {reviews?.results.map((review) => (
              <div className={cls.sliderItem} style={{ height: 177 }}>
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
                          style={{
                            width: 50,
                            height: "auto",
                            marginTop: 15,
                          }}
                          src="../../static/images/owl.video.play.png"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ul className="pagination-layout1 margin-t-50">
            {pages.length > 1 &&
              pages.map((page) => {
                const styles = {
                  color: activePage === page.pageNumber ? "#FFFFFF" : "",
                  backgroundColor:
                    activePage === page.pageNumber ? "#007bff" : "",
                  paddingLeft: 5,
                  paddingRight: 5,
                  cursor: "pointer",
                };

                return (
                  <li
                    style={styles}
                    onClick={() => onSetActivePage(page.pageNumber)}
                  >
                    {page.pageNumber}
                  </li>
                );
              })}
          </ul>
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
    </MainController>
  );
};

export default Reviews;
