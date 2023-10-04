import { useTranslation } from "next-i18next";
import React, { memo, useEffect, useState } from "react";

const LangSwitcher = memo(({ className, short }) => {
  const [active, setActive] = useState("en-EN");
  useEffect(() => {
    setActive(localStorage.getItem("i18nextLng"));
    console.log(localStorage.getItem("i18nextLng"));
  });
  const { t, i18n } = useTranslation();

  const english = async () => {
    i18n.changeLanguage("en-EN");
    setActive("en-EN");
  };

  const russian = async () => {
    i18n.changeLanguage("ru-RU");
    setActive("ru-RU");
  };

  const kazakh = async () => {
    i18n.changeLanguage("kz-KZ");
    setActive("kz-KZ");
  };

  const karakalpak = async () => {
    i18n.changeLanguage("kr-KR");
    setActive("kr-KR");
  };

  const uzbek = async () => {
    i18n.changeLanguage("uz-UZ");
    setActive("uz-UZ");
  };

  return (
    <>
      <a className="cart-trigger-icon">
        {active === "ru-RU" && (
          <img
            style={{ borderRadius: "50%" }}
            src="../../../static/images/100x100-russia-flag.png"
            alt="product"
            className="img-fluid"
          />
        )}
        {active === "uz-UZ" && (
          <img
            style={{ borderRadius: "50%" }}
            src="../../../static/images/100x100-flag-uzbekistan.gif"
            alt="product"
            className="img-fluid"
          />
        )}
        {active === "en-EN" && (
          <img
            style={{ borderRadius: "50%" }}
            src="../../../static/images/100x100-flag-england.png"
            alt="product"
            className="img-fluid"
          />
        )}
        {active === "kz-KZ" && (
          <img
            style={{
              borderRadius: "50%",
              width: "24px",
              height: "24px",
            }}
            src="../../../static/images/flag-3d-round-250.png"
            alt="product"
            className="img-fluid"
          />
        )}
        {active === "kr-KR" && (
          <img
            style={{
              borderRadius: "50%",
              width: "24px",
              height: "24px",
            }}
            src="../../../static/images/Karakalpakstan.jpg"
            alt="product"
            className="img-fluid"
          />
        )}
      </a>
      <div className="cart-items">
        {active !== "uz-UZ" && (
          <div className="cart-item">
            <div className="cart-img" onClick={uzbek}>
              <a>
                <img
                  style={{ borderRadius: "50%" }}
                  src="../../../static/images/100x100-flag-uzbekistan.gif"
                  alt="product"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="cart-title" onClick={uzbek}>
              <a>O`Z</a>
            </div>
          </div>
        )}
        {active !== "kr-KR" && (
          <div className="cart-item">
            <div className="cart-img" onClick={karakalpak}>
              <a>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                  src="../../../static/images/Karakalpakstan.jpg"
                  alt="product"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="cart-title" onClick={karakalpak}>
              <a>KR</a>
            </div>
          </div>
        )}
        {active !== "kz-KZ" && (
          <div className="cart-item">
            <div className="cart-img" onClick={kazakh}>
              <a>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                  src="../../../static/images/flag-3d-round-250.png"
                  alt="product"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="cart-title" onClick={kazakh}>
              <a>KZ</a>
            </div>
          </div>
        )}
        {active !== "ru-RU" && (
          <div className="cart-item">
            <div className="cart-img" onClick={russian}>
              <a>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                  src="../../../static/images/100x100-russia-flag.png"
                  alt="product"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="cart-title" onClick={russian}>
              <a>RU</a>
            </div>
          </div>
        )}
        {active !== "en-EN" && (
          <div className="cart-item">
            <div className="cart-img" onClick={english}>
              <a>
                <img
                  style={{ borderRadius: "50%" }}
                  src="../../../static/images/100x100-flag-england.png"
                  alt="product"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="cart-title" onClick={english}>
              <a>EN</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

export default LangSwitcher;
