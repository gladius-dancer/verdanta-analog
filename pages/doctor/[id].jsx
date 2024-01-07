import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainController from "@/components/MainController";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { GetSingleNewsService } from "@/services/news/GetSingleNews";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import cls from "@/admin-pages/AdminRooms/AdminRooms.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function SingleDoctor() {
  const [news, setNews] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  console.log(news);

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng")?.slice(0, 2);
    console.log(lang);
    const getSingleNews = async () => {
      if (!id) {
        router.push("/news");
      }
      const singleNews = await dispatch(
        GetSingleNewsService({ lang: lang, id: id }),
      );
      setNews(singleNews?.payload);
    };
    getSingleNews();
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
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
              >
                {news?.images.map((image) => (
                  <SwiperSlide
                    className={classNames("swiper-slide", cls.SwiperSlide)}
                    style={{
                      backgroundImage: `url(${image.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></SwiperSlide>
                ))}
              </Swiper>
              <h4>{news?.title}</h4>
              <p style={{ fontSize: 20 }}>{news?.content}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainController>
  );
}
