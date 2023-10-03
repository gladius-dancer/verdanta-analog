import Head from "next/head";
import "./i18n/i18n";
import Link from "next/link";
import { ToastComponent } from "@/components/Toast/ui/ToastComponent";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function MainController({ children, keywords }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
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
        {domLoaded && (
          <script src="../static/js/modernizr-3.5.0.min.js"></script>
        )}
      </Head>

      <div className="mean-container">
        {/*Preloader Start Here */}
        {/*<div id="preloader"></div>*/}
        {/*Preloader End Here */}
        <Navbar />
        {children}
        <Footer />
        <ToastComponent />

        {domLoaded && (
          <>
            {/*// jquery
            <script src="../static/js/jquery-2.2.4.min.js"></script>
            // Plugins js
            <script src="../static/js/plugins.js"></script>
            // Popper js
            <script src="../static/js/popper.js"></script>
            // Bootstrap js
            <script src="../static/js/bootstrap.min.js"></script>
            // Counterup Js
            <script src="../static/js/jquery.counterup.min.js"></script>
            // WOW JS
            <script src="../static/js/wow.min.js"></script>
            // Waypoints Js
            <script src="../static/js/waypoints.min.js"></script>
            // Parallaxie Js
            <script src="../static/js/parallaxie.js"></script>
            // Nivo slider js
            <script src="../static/js/jquery.nivo.slider.js"></script>
            <script src="../static/js/home.js"></script>
            // Owl Carousel Js
            <script src="../static/js/owl.carousel.min.js"></script>
            // Meanmenu Js
            <script src="../static/js/jquery.meanmenu.min.js"></script>
            // Magnific Popup Js
            <script src="../static/js/jquery.magnific-popup.min.js"></script>
            // Isotope Js
            <script src="../static/js/isotope.pkgd.min.js"></script>
            // Slick Cauosel JS
            <script src="../static/js/slick.min.js"></script>
            <script src="../static/js/smoothscroll.min.js"></script>
            // Custom Js
            <script src="../static/js/main.js"></script>*/}

            {/*<script type="text/javascript">
          $(document).ready(function(){
          $('#contact-form').on('submit', function(){
            var data = $(this).serialize();
            var url = '/ajax';
            $.ajax({
              type: 'POST',
              url: url,
              data: data,
              success: function(data){
                $('input[name="first_name"]').val('');
                $('input[name="last_name"]').val('');
                $('input[name="email"]').val('');
                $('input[name="phone"]').val('');
                $('input[name="message"]').val('');
                $("#success").show();
              }
            })
          });
          $(".button-down").on('click', function(e){
          $(".info-mobile").toggle();
          var height = $(".mobile-info").css('height');
          $(".mean-bar").css('top', height);
        });
        })
        </script>*/}
          </>
        )}
      </div>
    </>
  );
}

export default MainController;
