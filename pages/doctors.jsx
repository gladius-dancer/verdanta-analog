import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import MainController from "@/components/MainController";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";

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
            background:
              "url(../static/images/laser-eye-surgery-what-you-need-to-know.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>
                    <a href="/">Ayziya</a>
                  </h1>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">О клинике</a>
                    </li>
                    <li>
                      <a href="/about">Наши врачи</a>
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
              {doctors.map((doctor, key) => (
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
                          <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                            <i className="fas fa-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content">
                      <h4 className="item-title">
                        <a href="/doctors/glavnii-oftalmohirurg-akshei-khera/">
                          {doctor?.name}
                        </a>
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
