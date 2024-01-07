import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsService } from "@/services/news/GetNews";
import parse from "html-react-parser";

export default function SingleNews() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const news = useSelector((state) => state?.news?.news);

  const singleNews = news.find((item) => String(item.id) === id);

  console.log(singleNews);

  useEffect(() => {
    dispatch(GetNewsService());
  }, []);

  return (
    <MainController>
      <div className="container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_column_container-64bfc758a3d5c">
          <div className="vc_column-inner ">
            <div
              className="wpb_wrapper"
              style={{ paddingBottom: 50, paddingTop: 50 }}
            >
              {!!singleNews && (
                <>
                  <img src={singleNews?.image} alt="" />
                  <h3 style={{ marginTop: 30 }}>{singleNews?.title}</h3>
                  <p style={{ marginTop: 15 }}>{parse(singleNews?.content)}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainController>
  );
}
