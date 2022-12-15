/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import Logo from '../../assets/Logo.jpg';
import Search from '../../assets/search.png';
import Can from '../../assets/can.png';
import USD from '../../assets/ENG.png';
import RUB from '../../assets/download.jpg';
import './Header.sass';
import React, { useState} from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const [lang, setLang] = useState('USD');
  const [canAmount, setCanAmount] = useState(0);


  const handleClick = (e) => {
    setLang(e.target.value);
    console.log(lang);
  }

  return (
    <header className="header">
      <div className="header__settings">
        <p className="header__settings-title">
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </p>
        <div className="header__settings-container">
          <a href="#" className="header__settings-link">
            Sign In / Register
          </a>
          <img src={lang === 'USD' ? USD : RUB} alt="Flag"  className='header__settings-flag'/>
          <select name="lang" className="header__settings-picker" onClick={handleClick}>
            <option value="USD" selected>
            USD
            </option>
            <option value="RUB">
            RU
            </option>
            <span class="focus"></span>
          </select>
        </div>
      </div>
      <div className="header__container">
        <img src={Logo} alt="Logo" />
        <ul className="header__menu">
          <li className="header__item">
            <a href="#" className="header__link activeItem">Home</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Shop</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">FAQ'S</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Stockists</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Wholesale</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Contact</a>
          </li>
        </ul>
        <div className="header__btns">
          <a href="#">
            <img src={Search} alt="Search" />
          </a>
          <a href="#">
            <div className="header__counter">
              {canAmount}
            </div>
            <img src={Can} alt="Can" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
