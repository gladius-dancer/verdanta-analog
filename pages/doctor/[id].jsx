import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { GetDoctorsService } from "@/services/doctors/GetDoctorsService";

export default function SingleDoctor() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const doctors = useSelector((state) => state?.doctors?.doctors);

  const singleDoctor = doctors.find((item) => String(item.id) === id);

  console.log(singleDoctor);

  useEffect(() => {
    dispatch(GetDoctorsService());
  }, []);

  return (
    <MainController>
      <Navbar />
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div
              className="wpb_wrapper"
              style={{ paddingBottom: 50, paddingTop: 50 }}
            >
              {!!singleDoctor && (
                <>
                  <img src={singleDoctor?.picture} alt="" />
                  <h3 style={{ marginTop: 30 }}>{singleDoctor?.name}</h3>
                  <p style={{ marginTop: 15 }}>
                    {parse(singleDoctor?.description)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainController>
  );
}
