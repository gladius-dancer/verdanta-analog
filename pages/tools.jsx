import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Tools = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
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
                  <a href="/">Vedanta</a>
                </h1>
                <ul>
                  <li>
                    <a href="javascript:void(0)">О клинике</a>
                  </li>
                  <li>
                    <a href="/about">История</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-wrap-layout8">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/1287-srs.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">Stellaris PC</a>
                    </h3>
                    <p></p>
                    <a href="/tools/stellaris-pc/" className="item-btn">
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/bb311a62de17710324e17ffc9ca7ffb6.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/oftalmologicheskii-mikroskop-zeiss-opmi-lumera-t/">
                        Офтальмологический микроскоп ZEISS OPMI Lumera T
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/tools/oftalmologicheskii-mikroskop-zeiss-opmi-lumera-t/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/67749-6560235.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/mnogoparametricheskii-monitor-pacienta-dlya-ekg-mmed6000dp-m7/">
                        Многопараметрический монитор пациента для ЭКГ
                        MMED6000DP-M7
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/tools/mnogoparametricheskii-monitor-pacienta-dlya-ekg-mmed6000dp-m7/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/photo-2021-12-21-16-35-46.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/cirrus-hd-oct-5000/">
                        CIRRUS HD OCT 5000
                      </a>
                    </h3>
                    <p></p>
                    <a href="/tools/cirrus-hd-oct-5000/" className="item-btn">
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/33762a650a1c092dba974a7048e98eb5.png"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/oftalmologicheskii-lazer-zeiss-visulas-532s/">
                        Офтальмологический лазер ZEISS VISULAS 532s
                      </a>
                    </h3>
                    <p></p>
                    <a
                      href="/tools/oftalmologicheskii-lazer-zeiss-visulas-532s/"
                      className="item-btn"
                    >
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/photo-2021-12-21-17-08-20.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/visucamnm-fa/">VISUCAM®NM / FA</a>
                    </h3>
                    <p></p>
                    <a href="/tools/visucamnm-fa/" className="item-btn">
                      Подробно
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination-layout1 margin-t-20">
            <li className="active">
              <a href="/tools?currPage=1">1</a>
            </li>
            <li className="">
              <a href="/tools?currPage=2">2</a>
            </li>
            <li className="next">
              {" "}
              <a href="/tools?currPage=2">След. »</a>
            </li>
          </ul>
        </div>
      </section>
    </MainController>
  );
};

export default Tools;
