import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

export default function E6() {
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
                src="../../static/images/tools/Opthalmic%20Phacoemulsifier%20-%20Appasamy.jpg"
                className={cls.image}
              />
              <h3 style={{ marginTop: 30 }} className={cls.name}>
                Opthalmic Phacoemulsifier - Appasamy
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
                    <td>Бренд</td>
                    <td>Appasamy</td>
                  </tr>
                  <tr>
                    <td>Тип насоса</td>
                    <td>Перистальтический</td>
                  </tr>
                  <tr>
                    <td>Максимальный вакуум (в мм рт.ст.)</td>
                    <td>5 - 650 мм рт. ст. (линейное/нелинейное)</td>
                  </tr>
                  <tr>
                    <td>Рукоятка</td>
                    <td>
                      Легкий вес, продольное и усилие; Поперечный, 6 кристаллов
                    </td>
                  </tr>
                  <tr>
                    <td>Режимы U/S</td>
                    <td>
                      Непрерывный/Импульс/Микроимпульс/Пакетный
                      режим/Mburst/Импульс окклюзии/Микроимпульс окклюзии
                    </td>
                  </tr>
                  <tr>
                    <td>Мощность U/S</td>
                    <td>1 -100 %</td>
                  </tr>
                  <tr>
                    <td>Подача ирригационной жидкости</td>
                    <td> Самотеком / Непрерывный / Ножной</td>
                  </tr>
                  <tr>
                    <td>Ирригационный столбик I/V</td>
                    <td>Ручной / Моторизованный</td>
                  </tr>
                  <tr>
                    <td> Скорость аспирационного потока</td>
                    <td>1–50 куб.см/мин (линейная/нелинейная)</td>
                  </tr>
                  <tr>
                    <td>Время нарастания аспирации</td>
                    <td>1, 2 иamp ; 3</td>
                  </tr>
                  <tr>
                    <td>Мощность диатермии</td>
                    <td>
                      Биполярный, 1,2 Вт для 200 (Ом) 500 кГц, 8,5 Вт для 350
                      (Ом) 386 кГц
                    </td>
                  </tr>
                  <tr>
                    <td>Контроль диатермии</td>
                    <td>
                      5–100 % (линейный/нелинейный) во всех хирургических
                      режимах
                    </td>
                  </tr>
                  <tr>
                    <td>Тип резца для витрэктомии</td>
                    <td>
                      Гильотина, одинарная, 60–3000 резов/мин, 20G, 23G и
                      усилителя; Совместимость с 25G
                    </td>
                  </tr>
                  <tr>
                    <td>Режим витрэктомии</td>
                    <td>(Линейный/Нелинейный)</td>
                  </tr>
                  <tr>
                    <td>Пользователь</td>
                    <td>10 пользователей</td>
                  </tr>
                  <tr>
                    <td>Режим программирования пользователем</td>
                    <td>
                      U/S 1, U/S 2, U/S 3, I/A 1, I /A 2, I/A 3, CAPVAC, DIA
                      &amp; VIT
                    </td>
                  </tr>
                  <tr>
                    <td>Ножной переключатель</td>
                    <td>
                      Многофункциональный ножной переключатель с
                      программируемыми пользователем углами наклона педали и
                      усилителем; боковые кнопки.
                    </td>
                  </tr>
                  <tr>
                    <td>Пользовательский интерфейс</td>
                    <td>
                      Четкий 10,4-дюймовый ЖК-дисплей с сенсорным интерфейсом
                    </td>
                  </tr>
                  <tr>
                    <td>Наложение видео</td>
                    <td>Функция наложения видео доступна во всех режимах</td>
                  </tr>
                  <tr>
                    <td>Тележка для инструментов</td>
                    <td>
                      Компактная тележка для машины с лотком для инструментов
                    </td>
                  </tr>
                  <tr>
                    <td>Основное питание</td>
                    <td>110–230 В переменного тока</td>
                  </tr>
                  <tr>
                    <td>Частота</td>
                    <td>50–60 Гц</td>
                  </tr>
                  <tr>
                    <td>Номинальная мощность</td>
                    <td>150 ВА (макс.)</td>
                  </tr>
                  <tr>
                    <td>Размер</td>
                    <td>420 мм (Д) X 440 мм (Б) X 190 мм (В)</td>
                  </tr>
                  <tr>
                    <td>Вес</td>
                    <td>Вес консоли: 9,5 кг</td>
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
