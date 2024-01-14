import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

export default function E2() {
  return (
    <MainController>
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div
              className="wpb_wrapper"
              style={{ paddingBottom: 50, paddingTop: 50 }}
            >
              <img
                src="../../static/images/tools/Huvitz%20Auto-Ref%20Keratometer%20HRK-1.jpg"
                className={cls.image}
              />
              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Huvitz Auto-Ref Keratometer HRK-1
              </h3>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Режим K/R</td>
                    <td>Непрерывная кератометрия и amp; Рефрактометрия</td>
                  </tr>
                  <tr>
                    <td>Режим REF</td>
                    <td>Рефрактометрия</td>
                  </tr>
                  <tr>
                    <td>Режим KER</td>
                    <td>Кератометрия</td>
                  </tr>
                  <tr>
                    <td>Цветной режим просмотра</td>
                    <td>
                      Цветной просмотр и усиление; Помощь в подборе контактных
                      линз (белый и синий светодиоды 조명 사용)
                    </td>
                  </tr>

                  <tr>
                    <td>Вершинное расстояние (VD)</td>
                    <td>0.0, 12.0, 13.75, 15.0</td>
                  </tr>
                  <tr>
                    <td>Сфера (SPH)</td>
                    <td>-30,00~+25,00D (VD=12 мм) (шаг: 0,01, 0,12, 0,25D)</td>
                  </tr>
                  <tr>
                    <td>Цилиндр (CYL)</td>
                    <td>0,00~±12,00D (шаг: 0,01, 0,12, 0,25D)</td>
                  </tr>
                  <tr>
                    <td>Ось (AX)</td>
                    <td>0~180˚(1˚единица)</td>
                  </tr>
                  <tr>
                    <td>Индикация астигматизма</td>
                    <td>-, +,± (смешанный)</td>
                  </tr>
                  <tr>
                    <td>Расстояние между учениками (PD)</td>
                    <td>10~85 мм</td>
                  </tr>
                  <tr>
                    <td>Минимальный диаметр зрачка</td>
                    <td>ø2,0 мм</td>
                  </tr>

                  <tr>
                    <td>Радиус кривизны</td>
                    <td>5,0~13,0 мм (шаг: 0,01 мм)</td>
                  </tr>
                  <tr>
                    <td>Сила роговицы</td>
                    <td>
                      25,96D~67,50D (шаг: 0,05, 0,12, 0,25D) (когда
                      эквивалентный показатель преломления роговицы равен
                      1,3375)
                    </td>
                  </tr>
                  <tr>
                    <td>Астигматизм роговицы</td>
                    <td>0,00~-15,00D (шаг: 0,05, 0,12, 0,25D)</td>
                  </tr>
                  <tr>
                    <td>Ось</td>
                    <td>0~180˚ (шаг: 1˚)</td>
                  </tr>
                  <tr>
                    <td>Зрачок, диаметр радужной оболочки</td>
                    <td>2,0~14,0 мм (шаг: 0,1 мм)</td>
                  </tr>
                  <tr>
                    <td>Память данных</td>
                    <td>10 измерений для каждого глаза</td>
                  </tr>

                  <tr>
                    <td>Вверх и вниз</td>
                    <td>±15 мм</td>
                  </tr>

                  <tr>
                    <td>Показать</td>
                    <td>
                      7-дюймовая широкоцветная резистивная сенсорная панель TFT
                      LCD
                    </td>
                  </tr>
                  <tr>
                    <td>Интерфейс</td>
                    <td>RS-232C</td>
                  </tr>
                  <tr>
                    <td>Внутренний принтер</td>
                    <td>Линейный термопринтер</td>
                  </tr>
                  <tr>
                    <td>Источник питания</td>
                    <td>100–240 В переменного тока, 1,0–0,6 А, 50/60 Гц</td>
                  </tr>
                  <tr>
                    <td>Размеры/вес</td>
                    <td>261 (Ш) x 513 (Г) x 433 (В) / 16 кг</td>
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
