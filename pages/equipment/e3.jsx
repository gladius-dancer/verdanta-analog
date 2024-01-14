import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

export default function E3() {
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
                src="../../static/images/tools/Carl%20Zeiss%20ZIESS%20VISU%20200%20Operating%20Microscope.jpg"
                className={cls.image}
              />
              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Carl Zeiss ZIESS VISU 200 Operating Microscope
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
                    <td>Регулировка масштабирования</td>
                    <td>от 5x до 30x</td>
                  </tr>
                  <tr>
                    <td>Увеличение окуляров:</td>
                    <td>врач: 12,5x; ассистент: 12,5x</td>
                  </tr>
                  <tr>
                    <td>Объектив</td>
                    <td>f = 200 мм</td>
                  </tr>
                  <tr>
                    <td>XY:</td>
                    <td>тур 100 x 100 мм с автоматическим центрированием.</td>
                  </tr>
                  <tr>
                    <td>Наклонная бинокулярная головка с регулируемым углом</td>
                    <td>от 0 до 180 градусов.</td>
                  </tr>
                  <tr>
                    <td>Подход:</td>
                    <td>
                      Моторизованный, с ходом 50 мм и автоматическим
                      центрированием.
                    </td>
                  </tr>
                  <tr>
                    <td>Тип фокуса:</td>
                    <td>
                      Галоген 12В. 100 Вт. ошибка с автоматической фокусировкой
                    </td>
                  </tr>
                  <tr>
                    <td>Фильтр:</td>
                    <td>GG 475 для защиты глаз, УФ и ИК.</td>
                  </tr>
                  <tr>
                    <td>Расположение:</td>
                    <td>Сквозные пожарные рукоятки с магнитными тормозами.</td>
                  </tr>

                  <tr>
                    <td>Регулируемая интенсивность света:</td>
                    <td>есть.</td>
                  </tr>
                  <tr>
                    <td>Педаль:</td>
                    <td>водонепроницаемая; от 10 до 14 функций</td>
                  </tr>
                  <tr>
                    <td>Электропитание:</td>
                    <td>115/230 В/50-60 Гц</td>
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
