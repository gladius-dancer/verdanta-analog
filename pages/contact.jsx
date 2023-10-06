import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Contact = () => {
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-wrap-layout">
        <div className="container">
          <div className="google-map-area">
            <div id="googleMap" style={{ width: "100%", height: "496px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.090144002028!2d69.21513322925748!3d41.32277200587641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bed491fbfb7%3A0x1a6b03a4c374ee51!2sVedanta%20Medical!5e0!3m2!1sen!2s!4v1577535775412!5m2!1sen!2s"
                frameborder="0"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Запись на приём</h3>
                <form
                  className="contact-form-box"
                  id="contact-form"
                  action="javascript:void(0)"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Имя"
                        className="form-control"
                        name="first_name"
                        data-error="Phone field is required"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Фамилия"
                        className="form-control"
                        name="last_name"
                        data-error="E-mail field is required"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        data-error="Subject field is required"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Телефон"
                        className="form-control"
                        name="phone"
                        data-error="Subject field is required"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder=""
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows="7"
                        cols="20"
                        data-error="Message field is required"
                        required=""
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <button type="submit" className="item-btn">
                        Отправить
                      </button>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <a
                        id="success"
                        href="javascript:void(0)"
                        className="item-btn"
                        style={{ display: "none" }}
                      >
                        Отправлен
                      </a>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Адрес</h3>
                <div className="contact-info">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>ул. Маннон Уйгур,
                      дом 290.
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:admin@vedanta.uz">admin@vedanta.uz</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>{" "}
                      <a href="tel:+99871 249 66 33         +99871 249 66 77">
                        +99871 249 66 33 +99871 249 66 77
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainController>
  );
};

export default Contact;
