import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";

const Equipment = () => {
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
                  <Link href="/">Ayziya</Link>
                </h1>
                <ul>
                  <li>
                    <Link href="/about">О клинике</Link>
                  </li>
                  <li>
                    <Link href="/equipment">Оборудование</Link>
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
                      <Link href="/equipment/e1">
                        Appa YAG Лазер, модель 307
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e1" className="item-btn">
                      Подробно
                    </Link>
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
                      <Link href="/equipment/e2">
                        Huvitz Auto-Ref Keratometer HRK-1
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e2" className="item-btn">
                      Подробно
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className="departments-box-layout5">
                <div className="item-img">
                  <img
                    src="../static/images/tools/Carl%20Zeiss%20ZIESS%20VISU%20200%20Operating%20Microscope.jpg"
                    alt="department"
                    className="img-fluid"
                    style={{ height: "270px" }}
                  />
                  <div className="item-content">
                    <h3 className="item-title title-bar-primary3">
                      <Link href="/equipment/e3">
                        Carl Zeiss ZIESS VISU 200 Operating Microscope
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e3" className="item-btn">
                      Подробно
                    </Link>
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
                      <Link href="/equipment/e4">
                        Huvitz HS-5000 5x Slit Lamp Microscope
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e4" className="item-btn">
                      Подробно
                    </Link>
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
                      <Link href="/equipment/e5">
                        Huvitz Non Contact Tonometer HNT-1
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e5" className="item-btn">
                      Подробно
                    </Link>
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
                      <Link href="/equipment/e6">
                        Opthalmic Phacoemulsifier - Appasamy
                      </Link>
                    </h3>
                    <p></p>
                    <Link href="/equipment/e6" className="item-btn">
                      Подробно
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainController>
  );
};

export default Equipment;
