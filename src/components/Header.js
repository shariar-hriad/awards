import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header__area">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="" />
              <h2>Rewards</h2>
            </NavLink>
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
                <NavLink onClick={() => setToggle(!toggle)} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/about">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/blog">
                  blog
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <aside className={`mobile__sideBar ${toggle ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/about">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/blog">
                  blog
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setToggle(!toggle)} to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
