import React from 'react';

const Banner = () => {
  return (
    <section
      className="banner__section"
      style={{ background: `url(./images/banner.png) center/cover no-repeat` }}
    >
      <div className="container">
        <div className="banner__section_content">
          <h2 className="banner__section_content_title">Saving Rewards App </h2>
          <a href="/signup" className="primary__button">
            sign up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
