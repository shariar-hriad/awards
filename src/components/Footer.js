import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container flex flex-between">
        <div className="footer__content">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="" />
              <h2>Rewards</h2>
            </NavLink>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="footer__content">
          <h3 className="footer__content_title">Need Help ?</h3>
          <p>
            Contact our 24/7 customer support if you have any questions. We'll
            help you out.
          </p>
          <a className="support__mail" href="mailto:support@gmail.com">
            support@gmail.com
          </a>
        </div>
      </div>
      <div className="border__bottom" />
      <div className="container">
        <div className="copyright">
          <p>Copyright &copy; Rewards. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
