import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import MainController from "@/components/MainController";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";
import Link from "next/link";

const Doctors = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);
  const mainSliderRef = useRef();
  const syncedSliderRef = useRef();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state?.doctors?.doctors);

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
                      <Link href="/about">О клинике</Link>
                    </li>
                    <li>
                      <Link href="/doctors">Наши врачи</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="isotope-wrap" style={{ marginTop: 50 }}>
            <div className="row featuredContainer" id="no-equal-gallery">
              {domLoaded &&
                doctors?.map((doctor, key) => (
                  <div
                    className="no-equal-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                    key={key}
                  >
                    <div className="team-box-layout2">
                      <div className="item-img">
                        <div className="img-fluid rounded-circle">
                          <img src={doctor?.picture} />
                        </div>
                        <ul className="item-icon">
                          <li>
                            <Link
                              href={{
                                pathname: "doctor/[id]",
                                query: { id: doctor?.id },
                              }}
                              className="item-btn"
                            >
                              <i className="fas fa-plus"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h4 className="item-title">
                          <Link
                            href={{
                              pathname: "doctor/[id]",
                              query: { id: doctor?.id },
                            }}
                            className="item-btn"
                          >
                            {doctor?.name}
                          </Link>
                        </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </MainController>
    </>
  );
};

export default Doctors;
