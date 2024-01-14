import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

export default function E5() {
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
                src="../../static/images/tools/Huvitz%20Non%20Contact%20Tonometer%20HNT-1.jpg"
                className={cls.image}
              />
              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Huvitz Non Contact Tonometer HNT-1
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
                    <td>Модель</td>
                    <td>HNT-1</td>
                  </tr>
                  <tr>
                    <td>Режим измерения</td>
                    <td colSpan="2">Авто 3D, Авто 2D, ручной</td>
                  </tr>
                  <tr>
                    <td>Диапазон измерения</td>
                    <td colSpan="2">0-60 мм рт.ст. SPC30/60</td>
                  </tr>
                  <tr>
                    <td>Шаг измерения</td>
                    <td colSpan="2">
                      1 мм рт.ст. (среднее значение 0,1 мм рт.ст.)
                    </td>
                  </tr>
                  <tr>
                    <td>Режим пахиметрии</td>
                    <td>Наличие</td>
                  </tr>
                  <tr>
                    <td>Диапазон измерения толщины роговицы</td>
                    <td>150-1300 мкм</td>
                  </tr>
                  <tr>
                    <td>Шаг измерения толщины роговицы</td>
                    <td>1 мкм</td>
                  </tr>
                  <tr>
                    <td>Память</td>
                    <td colSpan="2">10 измерений для каждого глаза</td>
                  </tr>
                  <tr>
                    <td>Печать</td>
                    <td colSpan="2">Встроенный термопринтер</td>
                  </tr>
                  <tr>
                    <td>ЖК-дисплей</td>
                    <td colSpan="2">Цветной, сенсорный, 7 дюймов</td>
                  </tr>
                  <tr>
                    <td>Интерфейс</td>
                    <td colSpan="2">RS-232C</td>
                  </tr>
                  <tr>
                    <td>Габаритные размеры</td>
                    <td colSpan="2">514 x 262 x 435 мм</td>
                  </tr>
                  <tr>
                    <td>Масса</td>
                    <td>17,5 кг</td>
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
