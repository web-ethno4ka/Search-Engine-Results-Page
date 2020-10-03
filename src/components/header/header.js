import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelopeOpenText,
  faUserTie,
  faShoppingBasket,
  faSearch,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from './../../img/logo.png';

export default function Header() {
  return (
    <header className="header flex-row ">
      <div className="header__logo-block">
        <img src={logo} alt={'logotype'} />
      </div>

      <div className="icons-block flex-row">
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <FontAwesomeIcon icon={faUserTie} />
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </a>
        </div>
      </div>

      <div className="header__search-block flex-row">
        <input
          className="header__search-field"
          type="text"
          placeholder="What do you want to find?"
        />
        <button className="btn header__search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="header__mobile-menu-block">
        <button className="header__mobile-menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}
