import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileInfo, setMobileInfo] = useState(false);
  const [services, setServices] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const toggleMobileInfo = () => {
    setMobileInfo((prev) => !prev);
  };

  const showServices = () => {
    setServices((prevState) => !prevState);
  };

  useEffect(() => {
    const header = document.getElementById("header_2");
  }, []);

  return (
    <>
      <div
        className="mean-bar"
        style={{ top: mobileInfo ? "177px" : "35px", transition: "0.7s" }}
      >
        <div className="mobile-menu-nav-back">
          <a className="logo-mobile" href="/">
            <img
              src="../static/images/logo.png"
              alt="logo"
              className="img-fluid logo-mobile"
            />
          </a>
        </div>
        <a
          className={classNames(
            "meanmenu-reveal",
            mobileMenu ? "menu-close" : "",
          )}
          style={{ right: 0, left: "auto" }}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="mean-nav">
          <ul
            style={{ height: mobileMenu ? "524px" : "0px", transition: "0.7s" }}
          >
            <li>
              <Link href="/">Главная страница</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/doctors">Врачи</Link>
            </li>
            <li>
              <a
                onClick={showServices}
                style={{ position: "relative", zIndex: 1000 }}
              >
                Услуги
              </a>
              <ul
                className="dropdown-menu-col-1"
                style={{ display: services ? "block" : "none" }}
              >
                <li>
                  <Link href="/services/diagnostics">Диагностика</Link>
                </li>
                <li>
                  <Link href="/services/consultation">
                    Консультация офтальмолога
                  </Link>
                </li>
                <li>
                  <Link href="/services/survey">Обследование</Link>
                </li>
                <li>
                  <Link href="/services/surgical-treatment">
                    Оперативное лечение
                  </Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                style={{ zIndex: 1001, width: 30, fontSize: 18 }}
              >
                {services ? "-" : "+"}
              </a>
            </li>
            <li>
              <Link href="/equipment">Оборудование</Link>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li className="mean-last">
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-info">
        <div className="container">
          <div
            className="row info-mobile"
            style={{ height: mobileInfo ? "144px" : 0, transition: "0.7s" }}
          >
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 align-self-start">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">Адрес</div>
                  <div className="info">г. Нукус ул. Танирхан, дом 22 а.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 align-items-center">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">Телефон</div>
                  <div className="info">
                    <a href="tel:+998612297444">+99861 229 74 44</a>
                    <a href="tel:+998992607474">+99899 260 74 74</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 align-items-end">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">Рабочее время</div>
                  <div className="info">
                    <div>Пн. - Сб. 09:00 - 17:00.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row button-down">
            <div style={{ margin: "auto" }} onClick={toggleMobileInfo}>
              <i
                className="fas fa-angle-down"
                style={{
                  color: "#396cf0",
                  fontSize: "30px",
                  transform: mobileInfo ? "rotate(180deg)" : "rotate(0)",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {/* scrollUp Start Here */}
      <a href="" data-type="section-switch" className="scrollUp">
        <i className="fas fa-angle-double-up"></i>
      </a>
      {/* scrollUp End Here */}
      <div id="wrapper" className="wrapper">
        {/* Header Area Start Here */}
        <header id="header_2">
          <div className="header-top-bar top-bar-border-bottom bg-light-primary100 d-none d-md-block">
            <div className="container">
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className="col-lg-2 col-md-2 logo-area-layout2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a href="/" className="temp-logo">
                    <img
                      src="../static/images/logo.png"
                      alt="logo"
                      className="img-fluid logo"
                    />
                  </a>
                </div>
                <div className="header-contact-layout2">
                  <ul>
                    <li>
                      <div className="media">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            <a href="/contact">
                              г. Нукус ул. Танирхан, дом 22 а.
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <i className="far fa-clock"></i>
                        <div className="media-body space-sm">
                          <div className="info">Пн. - Сб. 09:00 - 17:00.</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <i className="fas fa-phone"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            <a href="tel:+998612297444">+99861 229 74 44</a>
                          </div>
                        </div>
                      </div>
                      <div className="media" style={{ marginTop: 10 }}>
                        <i className="fas fa-phone"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            <a href="tel:+998992607474">+99899 260 74 74</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-menu-area header-menu-layout2">
            <div className="container">
              <div className="row no-gutters d-flex align-items-center">
                <div className="col-md-12 possition-static">
                  <div className="template-main-menu">
                    <nav id="dropdown">
                      <ul>
                        <li>
                          <a href="/">Главная страница</a>
                        </li>
                        <li>
                          <a href="/about">О нас</a>
                        </li>
                        <li>
                          <a href="/doctors">Врачи</a>
                        </li>
                        <li>
                          <a>Услуги</a>
                          <ul className="dropdown-menu-col-1">
                            <li>
                              <Link href="/services/diagnostics">
                                Диагностика
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/consultation">
                                Консультация офтальмолога
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/survey">Обследование</Link>
                            </li>
                            <li>
                              <Link href="/services/surgical-treatment">
                                Оперативное лечение
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/equipment">Оборудование</a>
                        </li>
                        <li>
                          <a href="/news">Новости</a>
                        </li>
                        <li>
                          <a href="/contact">Контакты</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/*<div className="col-md-3">
                  <div className="header-action-items-layout2">
                    <ul>
                      <li className="d-none d-xl-block">
                        <form
                          method="GET"
                          id="top-search-form"
                          className="header-search-dark"
                          action="/search"
                        >
                          <input
                            type="text"
                            name="search"
                            className="search-input"
                            placeholder="Поиск...."
                            required=""
                          />
                          <button className="search-button">
                            <i className="flaticon-search"></i>
                          </button>
                        </form>
                      </li>
                      <li className="cart-area-dark">
                        <LangSwitcher />
                      </li>
                    </ul>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </header>
        {/* Header Area End Here */}
        {/*<Modal
                    isOpen={modal}
                    onRequestClose={handleModalClose}
                    modalClass={cls.Modal}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.0642148622824!2d59.6080800765433!3d42.46892292821626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a47c3d2015f%3A0x996c18fec36c513!2zSG90ZWwgTWFzc2FnZXQgaW4gTnVrdXMgLyDQk9C-0YHRgtC40L3QuNGG0LAg0JzQsNGB0YHQsNCz0LXRgiDQsiDQndGD0LrRg9GB0LU!5e0!3m2!1sen!2s!4v1690615378178!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Modal>*/}
      </div>
    </>
  );
}

export default Navbar;
