import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Gallery = () => {
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
                    <a href="javascript:void(0)">Пресс центр</a>
                  </li>
                  <li>
                    <a href="/about">Фотогалерея</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrap-layout1 bg-accent100">
        <div className="container">
          <div className="row">
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/dilemma-koronavirusnoi-epohi-kak-sdelat-tak-chtobi-pri-noshenii-maski-ne-zapotevali-ochki/">
                    <img
                      src="../static/images/138753705-2821715744766172-5982061614764927807-o.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">20.01.2021</div>
                  <h3 className="item-title">
                    <a href="/news/dilemma-koronavirusnoi-epohi-kak-sdelat-tak-chtobi-pri-noshenii-maski-ne-zapotevali-ochki/">
                      Дилемма коронавирусной эпохи: КАК СДЕЛАТЬ ТАК, ЧТОБЫ при
                      ношении маски НЕ ЗАПОТЕВАЛИ ОЧКИ
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/dilemma-koronavirusnoi-epohi-kak-sdelat-tak-chtobi-pri-noshenii-maski-ne-zapotevali-ochki/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/diagnostika-i-lechenie-katarakti/">
                    <img
                      src="../static/images/katarakta.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">14.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/diagnostika-i-lechenie-katarakti/">
                      Диагностика и лечение катаракты
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/diagnostika-i-lechenie-katarakti/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/5-neochevidnih-prichin-poiti-k-oftalmologu/">
                    <img
                      src="../static/images/0g7a1590.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">04.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/5-neochevidnih-prichin-poiti-k-oftalmologu/">
                      5 неочевидных причин пойти к офтальмологу
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/5-neochevidnih-prichin-poiti-k-oftalmologu/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/detskoe-zrenie-osnovnie-problemi/">
                    <img
                      src="../static/images/detskaya-oftalmologia-00.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">03.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/detskoe-zrenie-osnovnie-problemi/">
                      Детское зрение: основные проблемы
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/detskoe-zrenie-osnovnie-problemi/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/8-pravil-kak-sohranit-zrenie/">
                    <img
                      src="../static/images/0g7a1390.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">03.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/8-pravil-kak-sohranit-zrenie/">
                      8 правил, как сохранить зрение
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/8-pravil-kak-sohranit-zrenie/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="blog-box-layout2">
                <div className="item-img">
                  <a href="/news/narusheniya-zreniya-i-slepota/">
                    <img
                      src="../static/images/1548807757-okulist-kak-vybrat-horoshego-vracha.jpg"
                      className="img-fluid"
                      alt="blog"
                    />
                  </a>
                </div>
                <div className="item-content">
                  <div className="post-date">03.01.2020</div>
                  <h3 className="item-title">
                    <a href="/news/narusheniya-zreniya-i-slepota/">
                      Нарушения зрения и слепота
                    </a>
                  </h3>
                  <div className="post-actions-wrapper">
                    <ul>
                      <li>
                        <a
                          className="item-btn"
                          href="/news/narusheniya-zreniya-i-slepota/"
                        >
                          Подробно
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination-layout1 margin-t-20"></ul>
        </div>
      </section>
    </MainController>
  );
};

export default Gallery;
