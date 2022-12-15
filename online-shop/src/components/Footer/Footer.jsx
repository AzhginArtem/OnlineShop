/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.sass'
import Logo from '../../assets/Logo.png';
import Social from '../../assets/facebook.svg';
import Payment from '../../assets/paument.png';

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-descr">
          <img src={Logo} alt="" className="footer__top-logo" />
          <p className="footer__top-description">
            Good health is important, so all of our products have been carefully designed to bring
            out the best in you.
          </p>
        </div>
        <div className="footer__top-form">
          <h2 className="footer__top-title">Keep In Touch</h2>
          <p className="footer__top-description">
            Subscribe to receive new product updates, be the first to know about sales, and more.
          </p>
          <form action="">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="footer__top-inp"
              placeholder="Enter your email address"
            />
            <input className="footer__top-btn" type="submit" value="SUBSCRIBE" />
          </form>
          <hr />
        </div>
        <div className="footer__top-nav">
          <h2 className="footer__top-title">MORE INFO</h2>
          <ul className="footer__top-menu">
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Shipping & Delivery
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Refund Policy
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Partner Program
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Wholesale Portal
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                You Buy, We Donate
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" alt="nav" className="footer__top-link">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer__bot">
        <div className="footer__bot-socials">
          <img src={Social} alt="" className="footer__bot-social" />
          <img src={Social} alt="" className="footer__bot-social" />
          <img src={Social} alt="" className="footer__bot-social" />
          <img src={Social} alt="" className="footer__bot-social" />
          <img src={Social} alt="" className="footer__bot-social" />
        </div>
        <p className="footer__bot-subtitle">© 2021, <span>GOOD4ME</span>. Powered by Shopify</p>
        <img src={Payment} alt="" className="footer__bot-payment" />
      </div>
    </div>
  );
}
