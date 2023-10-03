import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Contacts = () => {
  const { t } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <MainController>
      {domLoaded && <Navbar />}
      <div className="page-top-block type-page">
        <div className="container">
          <div className="heading-block">
            <h1 className="h h3" suppressHydrationWarning>
              {t("Contact")}
            </h1>
          </div>
        </div>
      </div>
      <main className="main-container">
        <div className="container">
          <div className="post-3145 page type-page status-publish hentry">
            <div className="content-area clearfix">
              <div className="vc_row wpb_row vc_row-fluid vc_row-5e9847957836e vc_row-no-padding">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc6f28ec0e">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div
                        className="map-block map-5e984783c78b6"
                        style={{ height: "480px", width: "100%" }}
                      >
                        <div className="map">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.0642148622824!2d59.6080800765433!3d42.46892292821626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a47c3d2015f%3A0x996c18fec36c513!2zSG90ZWwgTWFzc2FnZXQgaW4gTnVrdXMgLyDQk9C-0YHRgtC40L3QuNGG0LAg0JzQsNGB0YHQsNCz0LXRgiDQsiDQndGD0LrRg9GB0LU!5e0!3m2!1sen!2s!4v1690615378178!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-content">
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-5 vc_column_container-5e9847e45fa8a">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="heading-block heading-5e9847bb4445f tal h-h5">
                        <h5 className="h" suppressHydrationWarning>
                          {t("Don’t hesitate to contact")}
                          <br />
                          {t("us if you need more help.")}
                        </h5>
                      </div>

                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <div className="contact-item">
                            <div className="label" suppressHydrationWarning>
                              {t("Nukus")}
                            </div>
                            <ul>
                              <li suppressHydrationWarning>
                                <i className="fas fa-map-marker-alt"></i>
                                {t(`Address: Nukus city,`)}
                                <br />
                                {t(`J.Aymurzayev Street 47a`)}
                              </li>

                              <li>
                                <i className="fas fa-clock"></i>
                                <span suppressHydrationWarning>
                                  {t("Open")}: 24/7
                                </span>
                              </li>
                            </ul>
                            <div className="value"></div>
                          </div>
                          <div className="contact-item">
                            <div className="label" suppressHydrationWarning>
                              {t("Contacts")}
                            </div>
                            <ul>
                              <li suppressHydrationWarning>
                                <i className="fas fa-envelope-open-text"></i>
                                {t("Postal code")}: 230100
                              </li>
                              <li suppressHydrationWarning>
                                <i className="fas fa-phone"></i>{" "}
                                {t("Telephone1")}: +998(61) 222-87-66
                              </li>
                              <li suppressHydrationWarning>
                                <i className="fas fa-phone"></i>{" "}
                                {t("Telephone2")}: +998(93) 614-51-00
                              </li>
                              <li suppressHydrationWarning>
                                <i className="fas fa-phone"></i> {t("Fax")}:
                                +998(61) 222-50-01
                              </li>
                              <li suppressHydrationWarning>
                                <i className="fas fa-envelope"></i> {t("Email")}
                                : massagethotel@mail.ru
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-5 vc_column_container-5e9847e45fa8a">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="heading-block heading-5e9847bb4445f tal h-h5">
                        <h5 className="h" suppressHydrationWarning>
                          {t("Our social networks")}
                          <br />
                          {t("to follow us")}
                        </h5>
                      </div>

                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <div className="contact-item">
                            <div className="label" suppressHydrationWarning>
                              {t("Links")}
                            </div>
                            <ul>
                              <li>
                                <i className="fab fa-instagram"></i> test
                              </li>
                              <li>
                                <i className="fab fa-telegram"></i> test
                              </li>
                              <li>
                                <i className="fab fa-facebook"></i> test
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="menu-overlay"></div>
      {domLoaded && <Footer />}
    </MainController>
  );
};

export default Contacts;
