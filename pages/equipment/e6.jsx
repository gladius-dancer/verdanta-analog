import React from "react";
import MainController from "@/components/MainController";
import cls from "./equipment.module.scss";

function E6() {
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
              <p style={{ marginTop: 15 }} className={cls.discription}></p>
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}

export default E1;