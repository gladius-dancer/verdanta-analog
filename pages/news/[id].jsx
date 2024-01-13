import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainController from "@/components/MainController";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsService } from "@/services/news/GetNews";
import parse from "html-react-parser";
import cls from "./News.module.scss";

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
              style={{ paddingBottom: 50, paddingTop: 120 }}
            >
              {!!singleNews && (
                <>
                  <img className={cls.image} src={singleNews?.image} alt="" />
                  <h3 className={cls.title} style={{ marginTop: 30 }}>
                    {singleNews?.title}
                  </h3>
                  <p className={cls.discription} style={{ marginTop: 15 }}>
                    {parse(singleNews?.content)}
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
