"use client";

import { useTranslation } from "next-i18next";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer light-color">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-3 col-lg-4">
            <div className="site-logo">
              <Link href="/">
                <span>Massaget</span>
              </Link>
            </div>
            <div className="widget widget_black_studio_tinymce">
              <div className="textwidget">
                <p
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                  suppressHydrationWarning
                >
                  {t(
                    `We support programs that create advancement opportunities for people.`,
                  )}
                </p>
              </div>
            </div>
            <div className="social-links-widget widget">
              <div className="social-links">
                <div
                  className="label"
                  style={{ fontFamily: "lato, sans-serif" }}
                  suppressHydrationWarning
                >
                  {t("Follow us")}:
                </div>
                <Link href="/">
                  <i className="base-icon-facebook"></i>
                </Link>
                <Link href="/">
                  <i className="base-icon-instagram"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-telegram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3">
            <div className="widget_text widget widget_custom_html">
              <h6 className="widget-title" suppressHydrationWarning>
                {t("Address")}
              </h6>
              <div className="textwidget custom-html-widget">
                <div className="contact-item">
                  <div className="value" suppressHydrationWarning>
                    {t("Nukus city")}, <br /> {t("J.Aymurzayev Street 47a")}
                    <br />
                    <label suppressHydrationWarning>{t("Open")}:</label> 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-2">
            <div className="widget_text widget widget_custom_html">
              <h6 className="widget-title" suppressHydrationWarning>
                {t("Contact us")}
              </h6>
              <div className="textwidget contacts-list custom-html-widget">
                <div className="value">
                  +998(61) 222-87-66
                  <br />
                  +998(93) 614-51-00
                  <br />
                  +998(61) 222-50-01 (fax)
                  <br />
                  massagethotel@mail.ru
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-text">© 2023, Powered by RT</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
