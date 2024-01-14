import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

export default function E4() {
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
                src="../../static/images/tools/Huvitz%20HS-5000%205x%20Slit%20Lamp%20Microscope.jpg"
                className={cls.image}
              />
              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Huvitz HS-5000 5x Slit Lamp Microscope
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
                    <td>Состояние</td>
                    <td>Новое</td>
                  </tr>
                  <tr>
                    <td>Коэффициент увеличения</td>
                    <td>6х – 10х – 16х – 25х – 40х</td>
                  </tr>
                  <tr>
                    <td>Диапазон межзрачковых расстояний, мм</td>
                    <td>55</td>
                  </tr>
                  <tr>
                    <td>Функции</td>
                    <td>Тонометр</td>
                  </tr>

                  <tr>
                    <th className="strong" colSpan="2">
                      Характеристики щели:
                    </th>
                  </tr>
                  <tr>
                    <td>Высота щели</td>
                    <td>0.3~12 плавно</td>
                  </tr>
                  <tr>
                    <td>Ширина щели</td>
                    <td>0~12 плавно</td>
                  </tr>
                  <tr>
                    <td>Проекция щели</td>
                    <td>1х</td>
                  </tr>
                  <tr>
                    <td>Диафрагма апертур</td>
                    <td>12.5х</td>
                  </tr>
                  <tr>
                    <td>Фильтры</td>
                    <td>Синий, «Без красного», Серый, Желтый</td>
                  </tr>
                  <tr>
                    <td>Вращение щели</td>
                    <td>0˚~180˚</td>
                  </tr>
                  <tr>
                    <td>Угол наклона источника</td>
                    <td>0˚,5˚,10˚,15˚,20˚</td>
                  </tr>
                  <tr>
                    <td>Фокусная дистанция</td>
                    <td>80мм</td>
                  </tr>
                  <tr>
                    <th className="strong" colSpan="2">
                      Микроскоп:
                    </th>
                  </tr>
                  <tr>
                    <td>Микроскоп</td>
                    <td>5х</td>
                  </tr>
                  <tr>
                    <td>Тип</td>
                    <td>Сходящийся бинокулярный</td>
                  </tr>
                  <tr>
                    <td>Увеличение</td>
                    <td>5-ти позиционное барабанного типа</td>
                  </tr>
                  <tr>
                    <td>Окуляры</td>
                    <td>12.5х</td>
                  </tr>
                  <tr>
                    <td>Общее увеличение</td>
                    <td>6х,10х,16х,25х,40х</td>
                  </tr>
                  <tr>
                    <td>Реальное поле обзора</td>
                    <td>38.5мм,22.2мм,15.2мм,10.5мм,6.7мм</td>
                  </tr>
                  <tr>
                    <td>Межцентровая настройка</td>
                    <td>55~80мм</td>
                  </tr>
                  <tr>
                    <th className="strong" colSpan="2">
                      Основа:
                    </th>
                  </tr>
                  <tr>
                    <td>Вертикальное движение</td>
                    <td>28мм</td>
                  </tr>
                  <tr>
                    <td>Продольное движение</td>
                    <td>78мм</td>
                  </tr>
                  <tr>
                    <td>Поперечное движение</td>
                    <td>98мм</td>
                  </tr>
                  <tr>
                    <td>Основа</td>
                    <td>10мм</td>
                  </tr>
                  <tr>
                    <td>Питание</td>
                    <td>100~240В АС</td>
                  </tr>
                  <tr>
                    <td>Частота питания</td>
                    <td>50/60 Гц</td>
                  </tr>
                  <tr>
                    <td>Потребление</td>
                    <td>70ВА</td>
                  </tr>
                  <tr>
                    <td>Питание лампы</td>
                    <td>12В</td>
                  </tr>
                  <tr>
                    <td>Галогеновая лампа</td>
                    <td>12В 30Вт</td>
                  </tr>
                  <tr>
                    <td>Лампа фиксации глаза</td>
                    <td>3.4В 20мА</td>
                  </tr>
                  <tr>
                    <th className="strong" colSpan="2">
                      Цифровая камера:
                    </th>
                  </tr>
                  <tr>
                    <td>Матрица</td>
                    <td>½ дюйма CCD</td>
                  </tr>
                  <tr>
                    <td>Разрешение изображения</td>
                    <td>До 1388х1036 пикселей</td>
                  </tr>
                  <tr>
                    <td>Размер щели</td>
                    <td>4.65нм х 4.65нм</td>
                  </tr>
                  <tr>
                    <td>Глубина изображения</td>
                    <td>8бит или 12бит RGB</td>
                  </tr>
                  <tr>
                    <td>Передача даннях</td>
                    <td>IEEE 1394a (6pin)</td>
                  </tr>
                  <tr>
                    <td>Скорость передачи</td>
                    <td>До 400Mb в сек</td>
                  </tr>
                  <tr>
                    <td>Тип линзы</td>
                    <td>Типа С</td>
                  </tr>
                  <tr>
                    <td>Частота кадров</td>
                    <td>15, 7.5, 3.75 кадров в сек.</td>
                  </tr>
                  <tr>
                    <td>Фотофиксация</td>
                    <td>Внешняя команда или программная команда</td>
                  </tr>
                  <tr>
                    <td>Габариты</td>
                    <td>44х29х63мм</td>
                  </tr>
                  <tr>
                    <td>Потребляемое питание</td>
                    <td>Менее 3Вт(12В из порта IEEE 1394)</td>
                  </tr>
                  <tr>
                    <th className="strong" colSpan="2">
                      Требования к компьютеру:
                    </th>
                  </tr>
                  <tr>
                    <td>Процессор</td>
                    <td>Pentium IV 2ГГц</td>
                  </tr>
                  <tr>
                    <td>Память</td>
                    <td>512Мв(1Гв рекомендовано)</td>
                  </tr>
                  <tr>
                    <td>Видео</td>
                    <td>ATI Radeon 9200(128Мв) или схожая</td>
                  </tr>
                  <tr>
                    <td>Операционная система</td>
                    <td>Windows(NT,2000,XP,7), Internet Explorer 6</td>
                  </tr>
                  <tr>
                    <td>Метод передачи</td>
                    <td>IEEE 1394a-Fire wire с питанием 12В</td>
                  </tr>
                  <tr>
                    <td>Монитор</td>
                    <td>Разрешение 1280х1024(1600х1200 рекомендовано)</td>
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
