import React from "react";
import Slider from "react-slick";
import Link from "next/link";

let doctorsSlider = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function DoctorsSlider({ doctors }) {
  return (
    <section className="team-wrap-layout1 bg-light-secondary100">
      <div className="container">
        <div className="section-heading heading-dark text-left heading-layout1">
          <h2>Наши врачи </h2>
          <p></p>
        </div>
        <Slider {...doctorsSlider}>
          {doctors?.map((doctor, key) => (
            <div className="team-box-layout2" key={key}>
              <div className="team-box-inner">
                <div className="item-img">
                  <div className="img-fluid rounded-circle">
                    <img src={doctor?.picture} />
                  </div>

                  <ul className="item-icon">
                    <li>
                      <Link href={`/doctor/${doctor?.id}`}>
                        <i className="fas fa-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="item-content">
                  <h4 className="item-title">
                    <Link href={`/doctor/${doctor?.id}`}>{doctor?.name}</Link>
                  </h4>
                  <p></p>
                  <Link href={`/doctor/${doctor?.id}`} className="item-btn">
                    Подробно
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default DoctorsSlider;
