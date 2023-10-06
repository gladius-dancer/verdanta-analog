import MainController from "@/components/MainController";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const PriceList = () => {
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
                <ul>
                  <li>
                    <a href="javascript:void(0)">О клинике</a>
                  </li>
                  <li>
                    <a href="/about">История</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-secondary100">
        <div className="container">
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Диагностическое обследование: 170 000 сум{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "500px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <span style={{ fontSize: "14px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "16px" }}>
                              Определение остроты зрения без и с коррекцией
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Кератометрия
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Тонометрия по Гольдмону
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Определение характера зрения
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Биомикроскопия
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Офтольмоскопия
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                Консультация врача офтальмолога
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <span style={{ fontSize: "16px" }}>
                            <span style={{ fontSize: "14px" }}>
                              <span style={{ fontSize: "16px" }}>
                                УЗИ глазного яблока
                              </span>
                            </span>
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>�&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0002.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Дополнительное диагностическое обследование:
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "500px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              УЗИ глаза
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              50.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Томография (или воднонагрузочная проба)
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              65.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Компьютерная периметрия
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              50.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Компьютерная эхобиометрия (Б-сканирование)
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              50.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              ОСТ
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              150.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Кеналог (введение в субтеноловое пространство
                              глазного яблока)
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              80.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Кеналог (внутривенное введение лекарственных
                              средств)
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              500.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Лазерокоагуляция сетчатки
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              500.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Флюрорисцентная ангиография (ФАГ)
                            </font>
                          </font>
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: "16px" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              500.000
                            </font>
                          </font>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>�&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0014_1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Оперативное лечение, Высшая сложность:{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "550px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong></strong>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Имплантация ИОЛ методом склеральной фиксации с
                              передней витреоэктомией
                            </font>
                          </font>
                        </p>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            4.500.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Удаление вывихнутого хрусталика + ИОЛ (п/к)
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.800.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Антиглауматозная операция на единственном глазу
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            3.200.000
                          </font>
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ marginLeft: "7.1pt" }}>
                  <p>�&nbsp;</p>

                  <p>
                    <span style={{ fontSize: "14px" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          *- в зависимости от типа и модели выбранной ИОЛ,
                          степени тяжести, а также с учетом возможности
                          использования дополнительного расходного материала в
                          процессе работы, возможная цена 20-30%.
                        </font>
                      </font>
                    </span>
                    <strong></strong>
                  </p>
                </div>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0014_1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Первая категория сложности:{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "550px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            ФЭК / ЛЭК + Склад ИОЛ (IQ/BL)
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            5 500 000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            ФЭК / ЛЭК + Склад ИОЛ
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            3.000.000-3.500.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Экстракапсулярная экстракция катаракты с
                            имплантацией мягкой (складывающейся) ИОЛ
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            3.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Экстракапсулярная экстракция катаракты+ИОЛ
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2 500 000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Интракапсулярная экстракция катаракты+ИОЛ (п/к)
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2 500 000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Имплатация ИОЛ в афакичный глаз
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Замена ИОЛ
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Антиглаукоматозная операция при глаукоме
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            3.200.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Энуклеация по поводу опухоли
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Эвисцерация
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Удаление внутри глаза.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            инород.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            переднее тело
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            1.700.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Леваж
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            2.400.000-3.400.000
                          </font>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Закачка масла
                          </font>
                        </font>
                      </td>
                      <td>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            1.500.000-2.000.000
                          </font>
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ marginLeft: "7.1pt" }}>
                  <p>�&nbsp;</p>

                  <p>
                    <span style={{ fontSize: "14px" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          *- в зависимости от типа и модели выбранной ИОЛ,
                          степени тяжести, а также с учетом возможности
                          использования дополнительного расходного материала в
                          процессе работы, возможная цена 20-30%.
                        </font>
                      </font>
                    </span>
                    <strong></strong>
                  </p>
                </div>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0105.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Вторая категория сложности:{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "500px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        Экстракапсулярная экстракция катаракты без
                        ИОЛ�&nbsp;�&nbsp;
                      </td>
                      <td>
                        <b>2.000.000 </b>�&nbsp; �&nbsp; �&nbsp; �&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Интракапсулярная экстракция катаракты без
                        ИОЛ(ФЭК)�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;{" "}
                        <b>�&nbsp;</b>
                      </td>
                      <td>
                        <b>2.000.000�&nbsp;</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          �&nbsp;епозиция ИОЛ�&nbsp;�&nbsp;�&nbsp;{" "}
                          <b>
                            �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                            �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                          </b>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>1.500.000�&nbsp;</strong>
                          <strong></strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Центрация�&nbsp;�&nbsp;�&nbsp;�&nbsp;{" "}
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <p>
                          <strong>1.300.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Передняя
                        витреоэктомия�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <b>
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        </b>
                      </td>
                      <td>
                        <p>
                          <strong>1.500.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        �&nbsp;�&nbsp;ассечение�&nbsp; вторичной
                        катаракты�&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp;�&nbsp;
                      </td>
                      <td>
                        <b>1.200.000�&nbsp;</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        �&nbsp;ассечение тяжей передней
                        камеры�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;{" "}
                        <b>
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp;�&nbsp;
                        </b>
                      </td>
                      <td>
                        <p>
                          <strong>1.200.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Формирование зрачка�&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                      </td>
                      <td>
                        <b>1.200.000�&nbsp;</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Пластика радужки�&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <p>
                          <strong>1.300.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Периферическая иридэктомия�&nbsp;
                        �&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <b>
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                          �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                        </b>
                      </td>
                      <td>
                        <p>
                          <strong>1.500.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Интравитреальное введение лекарственных средств�&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                      </td>
                      <td>
                        <p>
                          <strong>500.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Кросслинкинг�&nbsp;�&nbsp;�&nbsp;{" "}
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <p>
                          <strong>3.000.000�&nbsp;</strong>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>�&nbsp;</p>

                <p>�&nbsp;</p>

                <p>�&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0105_1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Третья категория сложности:{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellPadding="1"
                  cellSpacing="1"
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          Удаление ИОЛ
                          <br />
                          <strong></strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>2.000.000</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Удаление хрусталиковых масс�&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                      </td>
                      <td>
                        <b>1.500.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Криопексия лечебная�&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Криопексия
                        профилактическая�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        �&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Удаление опухоли века�&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                      </td>
                      <td>
                        <b>1.500.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Удаление птеригиума�&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp;
                      </td>
                      <td>
                        <p>
                          <strong>1.500.000</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Удал. птеригиума с пласт</td>
                      <td>
                        <p>
                          <strong>1.800.000</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Первичная хирургическая обработка раны�&nbsp;без
                        наложение швов
                      </td>
                      <td>
                        <p>
                          <b>�&nbsp;1.200.000�&nbsp;</b>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Первичная хирургическая обработка раны�&nbsp;с
                        наложением швов�&nbsp; �&nbsp;
                      </td>
                      <td>
                        <b>1.000.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        �&nbsp;евизия операционной
                        раны�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        �&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Восстановление передней
                        камеры�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        �&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Вымывание гифемы�&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;�&nbsp;
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Наложение швов�&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                        �&nbsp; �&nbsp; �&nbsp; �&nbsp;
                      </td>
                      <td>
                        <b>850.000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        �&nbsp;ассечение передних и задних
                        синихий�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        �&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;�&nbsp;
                        <span data-cke-marker="1">�&nbsp;</span>
                      </td>
                      <td>
                        <b>1.200.000</b>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>�&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0002_1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h3 className="item-title" style={{ fontSize: "25px" }}>
                Витреоретинальная хирургия глаз{" "}
              </h3>
              <div className="sub-title" style={{ fontSize: "18px" }}>
                <p></p>
                <table
                  border="0"
                  cellpadding="1"
                  cellspacing="1"
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        Высшая категория сложности (при сахарном
                        диабете,гемофтальме, осложненные отслойки сетчатки) (не
                        резидент)
                      </td>
                      <td>
                        <b>8.450.000-9.450.000 </b>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p>�&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="about-box-layout11 col-lg-5 col-12">
              <img
                src="../static/images/dpp-0014.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </MainController>
  );
};

export default PriceList;
