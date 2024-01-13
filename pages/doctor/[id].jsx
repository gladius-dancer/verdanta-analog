import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainController from "@/components/MainController";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";
import cls from "./Doctor.module.scss";

export default function SingleDoctor() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const doctors = useSelector((state) => state?.doctors?.doctors);

  const singleDoctor = doctors.find((item) => String(item.id) === id);

  useEffect(() => {
    dispatch(GetDoctorsService());
  }, []);

  return (
    <MainController>
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div
              className="wpb_wrapper"
              style={{ paddingBottom: 50, paddingTop: 120 }}
            >
              {!!singleDoctor && (
                <>
                  <div className={cls.image}>
                    <img src={singleDoctor?.picture} alt="" />
                  </div>
                  <h3 className={cls.title} style={{ marginTop: 30 }}>
                    {singleDoctor?.name}
                  </h3>
                  <p className={cls.description} style={{ marginTop: 15 }}>
                    {parse(singleDoctor?.description)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}
