import { useTranslation } from "next-i18next";
import cls from "./NewsBanner.module.css";

function NewsBanner() {
  const { t } = useTranslation();

  return (
    <>
      <div className={cls.aboutBanner}>
        <img
          className={cls.aboutBannerImg}
          src="static/wp-content/uploads/2020/06/img2.jpg"
          alt="News"
        />
        <div className="container banner-height">
          <div className={cls.aboutHeading}>
            <h1 className="h h3" suppressHydrationWarning>
              {t("News")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsBanner;
