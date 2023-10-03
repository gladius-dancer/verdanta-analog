const Features = () => {
  return (
    <div className="main-row features-block">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading-block">
              <h4 className="h">Flexible Booking Features.</h4>
            </div>
            <div className="text-block">
              You have the feature of developing your{" "}
              <b>own hotel or renting a business,</b> provided that you do not
              have to overbooking.
              <br />
              Using the plugin you can quickly and conveniently synchronize your
              reservation and availability information from your website with
              online travel platforms such as{" "}
              <b>Booking, TripAdvisor, Airbnb</b> and many others.
            </div>
            <a
              href="https://themeforest.net/item/holleta-hotel-booking-wordpress-theme/27595977?license=regular&open_purchase_for_item_id=26559750&purchasable=source&ref=ypromo"
              className="button-style2"
              target="_blank"
            >
              <span>Buy Now</span>
              <i className="base-icon-next-2"></i>
            </a>
          </div>
          <div className="col-auto">
            <div className="title-block">
              Sync your service with the main OTAs
            </div>
            <div className="logo-block">
              <div className="row">
                <div className="col-6">
                  <img
                    src="static/wp-content/themes/holleta-starting/assets/imgs/tripadvisor.png"
                    alt="tripadvisor"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="static/wp-content/themes/holleta-starting/assets/imgs/booking.png"
                    alt="booking"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="static/wp-content/themes/holleta-starting/assets/imgs/airbnb.png"
                    alt="airbnb"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="static/wp-content/themes/holleta-starting/assets/imgs/homeaway.png"
                    alt="homeaway"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
