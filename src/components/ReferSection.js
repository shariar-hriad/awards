import React from 'react';

const ReferSection = () => {
  return (
    <section className="refer__section">
      <div className="container">
        <div className="refer__content">
          <h3 className="refer__content_title">
            Refer a Friend, Get a PreLaunch Mapple Passport with 1000 Coin
          </h3>
          <a href="/refernow" className="primary__button">
            Refer Now
          </a>
          <p>
            For Every Friend, You Refer and he Signs Up You Get 10 Coins. 1 Coin
            is Equivalent to $1
          </p>
        </div>
        <div className="countdown">
          <h3 className="countdown__title">
            Mapple Coin App Launching on 28th February
          </h3>
          <div className="countdown__box">
            <div className="countdown__box_item">
              <h3 className="countdown__box_item_title">
                32 <span>Days</span>
              </h3>
            </div>
            <div className="countdown__box_item">
              <h3 className="countdown__box_item_title">
                56 <span>Hours</span>
              </h3>
            </div>
            <div className="countdown__box_item">
              <h3 className="countdown__box_item_title">
                35 <span>Minutes</span>
              </h3>
            </div>
            <div className="countdown__box_item">
              <h3 className="countdown__box_item_title">
                45 <span>Seconds</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferSection;
