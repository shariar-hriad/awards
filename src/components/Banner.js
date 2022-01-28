import React, { useState } from 'react';

const Banner = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <section
      className="banner__section"
      style={{
        background: `url(./images/banner.png) center/cover no-repeat`,
      }}
    >
      <div className="container">
        <div className="banner__section_content">
          <h2 className="banner__section_content_title">Saving Rewards App </h2>
          <div className="cta__button">
            <a href="/signup" className="primary__button">
              sign up
            </a>
            <div className={`toast ${showToast ? '' : 'hide'}`}>
              sign up now to get $10 <img src="/images/logo.png" alt="" />
              <img
                src="/images/cross.png"
                alt=""
                className="close__icon"
                onClick={() => setShowToast(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
