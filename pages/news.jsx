import MainController from "@/components/MainController";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsService } from "@/services/news/GetNews";
import Link from "next/link";
import cls from "./news/News.module.scss";

const News = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  useEffect(() => {
    setDomLoaded(true);
    dispatch(GetNewsService());
  }, []);

  return (
    <MainController>
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{
          backgroundImage:
            "url(../static/images/laser-eye-surgery-what-you-need-to-know.jpeg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>
                  <Link href="/">Ayziya</Link>
                </h1>
                <ul>
                  <li>
                    <Link href="/news">Новости</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrap-layout1 bg-accent100">
        <div className="container">
          <div className="row">
            {news?.map((item, key) => (
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-6" key={key}>
                <div className="blog-box-layout2">
                  <div className="item-img">
                    <div className={cls.imageInner}>
                      <img src={item?.image} className="img-fluid" />
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="post-date">
                      {new Date(item?.created_at).toLocaleDateString()}
                    </div>
                    <h3 className="item-title">{item?.title}</h3>
                    <div className="post-actions-wrapper">
                      <ul>
                        <li>
                          <Link
                            href={{
                              pathname: "news/[id]",
                              query: { id: item?.id },
                            }}
                            className="item-btn"
                          >
                            Подробно
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination-layout1 margin-t-20"></ul>
        </div>
      </section>
    </MainController>
  );
};

export default News;
