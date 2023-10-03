import Head from "next/head";
import "./i18n/i18n";
import Link from "next/link";
import { ToastComponent } from "@/components/Toast/ui/ToastComponent";

function MainController({ children, keywords }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <title>Massaget</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../static/images/favicon.png"
        />
        <link rel="stylesheet" href="../static/css/normalize.css" />
        <link rel="stylesheet" href="../static/css/main.css" />
        <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../static/css/animate.min.css" />
        <link rel="stylesheet" href="../static/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="../static/css/flaticon_1.css" />
        <link rel="stylesheet" href="../static/css/flaticon.css" />
        <link rel="stylesheet" href="../static/css/meanmenu.min.css" />
        <link rel="stylesheet" href="../static/css/magnific-popup.css" />
        <link rel="stylesheet" href="../static/css/slick.css" />
        <link rel="stylesheet" href="../static/css/slick-theme.css" />
        <link rel="stylesheet" href="../static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="../static/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="../static/css/nivo-slider.css" />
        <link rel="stylesheet" href="../static/css/elements.css" />
        <link rel="stylesheet" href="../static/css/style.css" />
        <link rel="stylesheet" href="../static/css/custom.css" />
      </Head>

      <div className="mean-container">
        {/*Preloader Start Here */}
        {/*<div id="preloader"></div>*/}
        {/*Preloader End Here */}
        {children}
        <ToastComponent />
      </div>
    </>
  );
}

export default MainController;
