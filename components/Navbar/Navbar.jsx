import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import LangSwitcher from "@/components/i18n/LangSwitcher/LangSwitcher";
import Modal from "@/components/Modal/Modal";
import { Toast } from "@/components/Toast/lib/Toast";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { rotate } from "next/dist/server/lib/squoosh/impl";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [modal, setmodal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileInfo, setMobileInfo] = useState(false);

  const handleModalOpen = () => {
    setmodal(true);
  };
  const handleModalClose = () => {
    setmodal(false);
  };
  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const toggleMobileInfo = () => {
    setMobileInfo((prev) => !prev);
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
              <a href="javascript:void(0)">О клинике</a>
              <ul className="dropdown-menu-col-1" style={{ display: "none" }}>
                <li>
                  <Link href="/about">О нас</Link>
                </li>
              </ul>
              <a className="mean-expand" href="#" style={{ fontSize: "18px" }}>
                +
              </a>
            </li>
            <li>
              <Link href="/doctors">Врачи</Link>
            </li>
            <li>
              <a href="javascript:void(0)">Услуги</a>
              <ul className="dropdown-menu-col-1" style={{ display: "none" }}>
                <li>
                  <Link href="/services">Все услуги </Link>
                </li>
                <li>
                  <Link href="/price-list">Прейскурант услуг</Link>
                </li>
              </ul>
              <a className="mean-expand" href="#" style={{ fontSize: "18px" }}>
                +
              </a>
            </li>
            <li>
              <Link href="/tools">Оборудование</Link>
            </li>
            <li>
              <a href="javascript:void(0)">Пресс центр</a>
              <ul className="dropdown-menu-col-1" style={{ display: "none" }}>
                <li>
                  <Link href="/news">Новости</Link>
                </li>
                <li>
                  <Link href="/gallery">Фотогалерея</Link>
                </li>
              </ul>
              <a className="mean-expand" href="#" style={{ fontSize: "18px" }}>
                +
              </a>
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
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 align-self-start">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">Адрес</div>
                  <div className="info">ул. Маннон Уйгур, дом 290.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 align-items-center">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">Телефон</div>
                  <div className="info">
                    <a href="tel:+99871 249 66 33         +99871 249 66 77">
                      +99871 249 66 33 +99871 249 66 77
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 align-items-end">
              <div className="media">
                <div className="media-body space-sm">
                  <div className="title">�&nbsp;абочее время</div>
                  <div className="info">
                    Пн.-Пт. 09:00 - 17:00. Сб. 09:00 - 14:00.
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
      <a href="#wrapper" data-type="section-switch" className="scrollUp">
        <i className="fas fa-angle-double-up"></i>
      </a>
      {/* scrollUp End Here */}
      <div id="wrapper" className="wrapper">
        {/* Header Area Start Here */}
        <header id="header_2">
          <div className="header-top-bar top-bar-border-bottom bg-light-primary100 d-none d-md-block">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3 logo-area-layout2"
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
                <div className="col-lg-9 col-md-9 col-12 header-contact-layout2">
                  <ul>
                    <li>
                      <div className="media">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            <a href="/contact">ул. Маннон Уйгур, дом 290.</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <i className="fas fa-phone"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            <a href="tel:+99871 249 66 33         +99871 249 66 77">
                              +99871 249 66 33 +99871 249 66 77
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <i className="far fa-clock"></i>
                        <div className="media-body space-sm">
                          <div className="info">
                            Пн.-Пт. 09:00 - 17:00. Сб. 09:00 - 14:00.
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
                <div className="col-md-9 possition-static">
                  <div className="template-main-menu">
                    <nav id="dropdown">
                      <ul>
                        <li>
                          <a href="javascript:void(0)">О клинике</a>
                          <ul className="dropdown-menu-col-1">
                            <li>
                              <a href="/about">О нас</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/doctors">Врачи</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Услуги</a>
                          <ul className="dropdown-menu-col-1">
                            <li>
                              <a href="/services">Все услуги </a>
                            </li>
                            <li>
                              <a href="/price-list">Прейскурант услуг</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/tools">Оборудование</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Пресс центр</a>
                          <ul className="dropdown-menu-col-1">
                            <li>
                              <a href="/news">Новости</a>
                            </li>
                            <li>
                              <a href="/gallery">Фотогалерея</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/contact">Контакты</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
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
                </div>
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
