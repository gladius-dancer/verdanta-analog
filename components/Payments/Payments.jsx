import { useTranslation } from "next-i18next";

function Payments() {
  const { t } = useTranslation();
  return (
    <div className="main-row payment-area dark-scheme main-row-218c89ad3e34">
      <div className="bg-overlay">
        <div className="pattern type2"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-6">
            <div className="side-img-block">
              <div
                style={{
                  backgroundImage:
                    "url(static/wp-content/themes/holleta-starting/assets/imgs/bg3.jpg)",
                }}
              ></div>
            </div>
          </div>
          <div className="col-12 col-sm">
            <div className="heading-block">
              <h4 className="h" suppressHydrationWarning>
                {t("Various Payment Gateways.")}
              </h4>
            </div>
            <div className="label" suppressHydrationWarning>
              {t("Online Payments or After Arrival")}
            </div>
            <div className="text-block" suppressHydrationWarning>
              {t(
                "Accept booking payments via built-in VisaCard, MasterCard, UzCard or Humo gateways.",
              )}
            </div>
            <div className="pay-logos">
              <div>
                <img src="static/visa.jpg" alt="Visa" />
              </div>
              <div>
                <img src="static/master.jpg" alt="Master" />
              </div>
              <div>
                <img src="static/uzcard.jpg" alt="Master" />
              </div>
              <div>
                <img src="static/humo.jpg" alt="Master" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
