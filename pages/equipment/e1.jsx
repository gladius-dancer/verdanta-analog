import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

function E1() {
  return (
    <MainController>
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div
              className="wpb_wrapper"
              style={{ paddingBottom: 50, paddingTop: 50 }}
            >
              <div>
                <img
                  src="../../static/images/tools/Appa%20YAG%20Лазер,%20модель%20307.jpg"
                  className={cls.image}
                />
              </div>

              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Appa YAG Лазер, модель 307
              </h3>
              <p style={{ marginTop: 15 }} className={cls.discription}></p>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Тип излучателя</td>
                    <td>
                      YAG Nd-лазер с Q-модуляцией для использования в
                      офтальмологическом аппарате для микрохирургических
                      операций
                    </td>
                  </tr>
                  <tr>
                    <td>Длина волны излучения, (нм)</td>
                    <td>1064</td>
                  </tr>
                  <tr>
                    <td>Энергия импульса, (мДж)</td>
                    <td>0,5 -10</td>
                  </tr>
                  <tr>
                    <td>Режим</td>
                    <td>Фундаментальный</td>
                  </tr>
                  <tr>
                    <td>Угол сходимости излучения (градус)</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Минимальный диаметр фокального пятна (мкр)</td>
                    <td>10 или 20 (опция)</td>
                  </tr>
                  <tr>
                    <td>Режим работы излучателя</td>
                    <td>
                      Взрывной или одиночные импульсы, пачки из двух импульсов
                      (опция)
                    </td>
                  </tr>
                  <tr>
                    <td>Длительность импульса (нс)</td>
                    <td>&lt; 4</td>
                  </tr>
                  <tr>
                    <td>Частота повторного импульса (Гц)</td>
                    <td>max 2</td>
                  </tr>
                  <tr>
                    <td>Прицельный луч</td>
                    <td>Дуал лазер диод (650 нм)</td>
                  </tr>
                  <tr>
                    <td>Фокусное смещение (µм)</td>
                    <td>±150</td>
                  </tr>
                  <tr>
                    <td>Тип мкироскопа</td>
                    <td>Галилеевский, бинокулярный</td>
                  </tr>
                  <tr>
                    <td>Окуляры</td>
                    <td>12,5х</td>
                  </tr>
                  <tr>
                    <td>Увеличение</td>
                    <td>вращение барабана, 5 позиций</td>
                  </tr>
                  <tr>
                    <td>Регулировка диоптрий</td>
                    <td>+6D / -6D</td>
                  </tr>
                  <tr>
                    <td>Коэффициент увеличения</td>
                    <td>6х, 10х, 16х, 25х, 40х</td>
                  </tr>
                  <tr>
                    <td>Фокусное расстояние (мм)</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Диапазон PD (мм)</td>
                    <td>52-75</td>
                  </tr>
                  <tr>
                    <td>Освещение щели</td>
                    <td>Галогеновая лампа, 12В, 30 Вт</td>
                  </tr>
                  <tr>
                    <td>Ширина щели (мм)</td>
                    <td>0-12</td>
                  </tr>
                  <tr>
                    <td>Длина щели (мм)</td>
                    <td>14, 10, 8, 5, 3, 2, 1</td>
                  </tr>
                  <tr>
                    <td>Апертура (диафрагма) щели (мм)</td>
                    <td>0,2; 2; 3; 4; 6; 8; 11,5</td>
                  </tr>
                  <tr>
                    <td>Угол поворота щели (градус)</td>
                    <td>0-180</td>
                  </tr>
                  <tr>
                    <td>Светофильтры</td>
                    <td>
                      Фильтр, поглощающий тепловое излучение, зеленый, синий
                      кобальт
                    </td>
                  </tr>
                  <tr>
                    <td>Размеры основания стола (мм)</td>
                    <td>522 х 342</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <td colSpan="2">
                      <strong>Общие характеристики</strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Вес (кг)</td>
                    <td>37</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}

export default E1;
