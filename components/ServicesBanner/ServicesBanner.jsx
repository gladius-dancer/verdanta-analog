import cls from "./ServicesBanner.module.css";
import { useTranslation } from "next-i18next";

function ServicesBanner() {
  const { t } = useTranslation();

  return (
    <>
      <div className={cls.aboutBanner}>
        <img
          className={cls.aboutBannerImg}
          src="static/wp-content/uploads/2020/06/img2.jpg"
          alt="Services"
        />
        <div className="container banner-height">
          <div className={cls.aboutHeading}>
            <h1 className="h h3" suppressHydrationWarning>
              {t("Services")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesBanner;