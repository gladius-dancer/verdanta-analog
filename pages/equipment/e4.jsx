import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

function E4() {
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
              <p style={{ marginTop: 15 }} className={cls.discription}></p>
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}

export default E1;
