import Link from "next/link";
import cls from "./Prices.module.css";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

function Prices() {
  const { t } = useTranslation();
  return (
    <div className="main-row room-details-area">
      <div className="container">
        <div className="top-block">
          <div className="heading-block">
            <h4 className="h" suppressHydrationWarning>
              {t("Our Prices")}
            </h4>
          </div>
        </div>
        <div className="room-details-items">
          <div className={classNames("row", cls.PriceList)}>
            <div className="page-item">
              <div className={cls.Prices}>
                <h1>LUX</h1>
                <div className={cls.Price}>
                  <span>$56</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("SINGLE")}</p>
                </div>
                <div className={cls.Price}>
                  <span>$</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("DOUBLE")}</p>
                </div>
              </div>
              <div className="content">
                <Link
                  className="button-style1"
                  href="/booking"
                  suppressHydrationWarning
                >
                  {t("Book now")}
                </Link>
              </div>
            </div>
            <div className="page-item">
              <div className={cls.Prices}>
                <h1>SEMI LUX</h1>
                <div className={cls.Price}>
                  <span>$</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("SINGLE")}</p>
                </div>
                <div className={cls.Price}>
                  <span>$</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("DOUBLE")}</p>
                </div>
              </div>
              <div className="content">
                <Link
                  className="button-style1"
                  href="/booking"
                  suppressHydrationWarning
                >
                  {t("Book now")}
                </Link>
              </div>
            </div>
            <div className="page-item">
              <div className={cls.Prices}>
                <h1>STANDART</h1>
                <div className={cls.Price}>
                  <span>$</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("SINGLE")}</p>
                </div>
                <div className={cls.Price}>
                  <span>$</span>
                  <span suppressHydrationWarning>/{t("night")}</span>
                  <p suppressHydrationWarning>{t("DOUBLE")}</p>
                </div>
              </div>
              <div className="content">
                <Link
                  className="button-style1"
                  href="/booking"
                  suppressHydrationWarning
                >
                  {t("Book now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
