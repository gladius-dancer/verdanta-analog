import { useTranslation } from "next-i18next";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <section className="footer-top-wrap">
        <div className="container">
          <div className="row">
            <div className="single-item col-lg-3 col-md-6 col-12">
              <div className="footer-box">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="../static/images/logo.png"
                      className="img-fluid"
                      alt="footer-logo"
                    />
                  </a>
                </div>
                <div className="footer-contact-info">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="/contact">ул. Маннон Уйгур, дом 290.</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel: +99871 249 66 33         +99871 249 66 77">
                        +99871 249 66 33 +99871 249 66 77
                      </a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:admin@vedanta.uz">admin@vedanta.uz</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-item col-lg-3 col-md-6 col-12">
              <div className="footer-box">
                <div className="footer-header">
                  <h3>Ссылки </h3>
                </div>
                <div className="footer-departments">
                  <ul>
                    <li>
                      <a href="">О клинике </a>
                    </li>
                    <li>
                      <a href="https://vedanta.corporate.uz/doctorsSlider">
                        Врачи{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://vedanta.corporate.uz/tools">
                        Оборудование{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://vedanta.corporate.uz/news">Новости </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-item col-lg-3 col-md-6 col-12">
              <div className="footer-box">
                <div className="footer-header">
                  <h3>Услуги</h3>
                </div>
                <div className="footer-quick-link">
                  <ul>
                    <li>
                      <a href="https://vedanta.corporate.uz/services/obsledovanie/">
                        Обследование{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://vedanta.corporate.uz/services/operativnoe-lechenie/">
                        Оперативное лечение{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://vedanta.corporate.uz/services/vitreoretinalnaya-hirurgiya/">
                        Хирургия{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">Диагностика </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-item col-lg-3 col-md-6 col-12">
              <div className="footer-box">
                <div className="footer-header">
                  <h3>Рабочее время</h3>
                </div>
                <div className="footer-opening-hours">
                  <ul>
                    <li>Пн.-Пт. 09:00 - 17:00. Сб. 09:00 - 14:00.</li>
                    <li>Закрыто: Воскресенье</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-center-wrap">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 col-12">
              <div className="footer-social">
                <ul>
                  <li>Мы в социальных сетях</li>
                  <li>
                    <a href="https://www.facebook.com/Vedantamedical/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/vedanta_uz/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom-wrap">
        <div className="copyright">
          © 2023. Все права защищены. Разработка сайта{" "}
          <a className="footer-light" href="https://light.uz">
            Softium
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
