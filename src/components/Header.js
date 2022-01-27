import React, { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header__area">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <a href="/">
              <h2>Rewards</h2>
            </a>
          </div>
          {/* mobile bar icon */}
          <button
            className="mobile__menu"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <aside className={`mobile__sideBar ${toggle ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
