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
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}
