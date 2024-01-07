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
                  <a href="/">Ayziya</a>
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
                    src="../static/images/tools/Appa%20YAG%20Лазер,%20модель%20307.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">
                        Appa YAG Лазер, модель 307
                      </a>
                    </h3>
                    <p></p>
                    <a href="/" className="item-btn">
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
                    src="../static/images/tools/Huvitz%20Auto-Ref%20Keratometer%20HRK-1.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">
                        Huvitz Auto-Ref Keratometer HRK-1
                      </a>
                    </h3>
                    <p></p>
                    <a href="/" className="item-btn">
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
                    src="../static/images/tools/Huvitz%20HS-5000%205x%20Slit%20Lamp%20Microscope.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">
                        Huvitz HS-5000 5x Slit Lamp Microscope
                      </a>
                    </h3>
                    <p></p>
                    <a href="/" className="item-btn">
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
                    src="../static/images/tools/Huvitz%20Non%20Contact%20Tonometer%20HNT-1.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">
                        Huvitz Non Contact Tonometer HNT-1
                      </a>
                    </h3>
                    <p></p>
                    <a href="/" className="item-btn">
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
                    src="../static/images/tools/Opthalmic%20Phacoemulsifier%20-%20Appasamy.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <a href="/tools/stellaris-pc/">
                        Opthalmic Phacoemulsifier - Appasamy
                      </a>
                    </h3>
                    <p></p>
                    <a href="/" className="item-btn">
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
