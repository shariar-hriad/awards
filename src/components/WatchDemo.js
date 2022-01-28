import React from 'react';

const WatchDemo = () => {
  return (
    <section className="demo__section">
      <div className="container">
        <div className="demo__section_content">
          <h2 className="demo__section_content_title">Watch Our Demo</h2>
          <div
            className="demo__section_content_popup"
            style={{
              background: `url(./images/demobg.png) center/cover no-repeat`,
            }}
          >
            <button className="play__button">
              {/* <img src="/images/Vector.png" alt="" /> */}
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchDemo;
