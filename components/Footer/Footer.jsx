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
                <div
                  className="footer-logo"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a href="/">
                    <img
                      src="../static/images/logo.png"
                      className="img-fluid logo"
                      alt="footer-logo"
                    />
                  </a>
                </div>
                <div className="footer-contact-info">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="/contact">г. Нукус ул. Танирхан, дом 22 а.</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel: +998612297444">+99861 229 74 44</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel: +998992607474">+99899 260 74 74</a>
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
                      <a href="https://ayziya.corporate.uz/doctorsSlider">
                        Врачи{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://ayziya.corporate.uz/tools">
                        Оборудование{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://ayziya.corporate.uz/news">Новости </a>
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
                      <a href="https://ayziya.corporate.uz/services/obsledovanie/">
                        Обследование{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://ayziya.corporate.uz/services/operativnoe-lechenie/">
                        Оперативное лечение{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://ayziya.corporate.uz/services/vitreoretinalnaya-hirurgiya/">
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
                    <li>Пн.-Пт. 09:00 - 17:00. Сб. 09:00 - 16:00.</li>
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
                    <a href="https://t.me/ayziya_clinic">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ayziya_clinic">
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
          <a className="footer-light" href="https://softium.uz">
            Softium
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
