const RoomStyles = () => {
  return (
    <div className="main-row room-details-area">
      <div className="container">
        <div className="top-block">
          <div className="heading-block">
            <h4 className="h">Room Detail Styles.</h4>
          </div>
          <div className="right">
            <div className="right-t">Make your rooms description idividual</div>
          </div>
        </div>
        <div className="room-details-items">
          <div className="row">
            <div className="page-item col-12 col-sm-4">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(static/wp-content/themes/holleta-starting/assets/imgs/room1.jpg)",
                }}
              >
                <a href="accommodation/triple-room/index.htm" target="_blank">
                  <i className="base-icon-plus"></i>
                  <span>View</span>
                </a>
              </div>
              <div className="content">
                <a
                  className="button-style1"
                  href="accommodation/triple-room/index.htm"
                  target="_blank"
                >
                  Check now
                </a>
              </div>
            </div>
            <div className="page-item col-12 col-sm-4">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(static/wp-content/themes/holleta-starting/assets/imgs/room2.jpg)",
                }}
              >
                <a href="accommodation/studio-suite/index.htm" target="_blank">
                  <i className="base-icon-plus"></i>
                  <span>View</span>
                </a>
              </div>
              <div className="content">
                <a
                  className="button-style1"
                  href="accommodation/studio-suite/index.htm"
                  target="_blank"
                >
                  Check now
                </a>
              </div>
            </div>
            <div className="page-item col-12 col-sm-4">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(static/wp-content/themes/holleta-starting/assets/imgs/room3.jpg)",
                }}
              >
                <a href="accommodation/classic-room/index.htm" target="_blank">
                  <i className="base-icon-plus"></i>
                  <span>View</span>
                </a>
              </div>
              <div className="content">
                <a
                  className="button-style1"
                  href="accommodation/classic-room/index.htm"
                  target="_blank"
                >
                  Check now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomStyles;
