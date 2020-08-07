import React from 'react';

export default function Header() {
  return (
    <header className="header flex-row ">
      <div className="header__logo-block" onclick="window.location.href='#'">
        <img src="img/logo.png" alt="logotype" />
      </div>

      <div className="icons-block flex-row">
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <i className="fas fa-phone"></i>
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <i className="fas fa-envelope-open-text"></i>
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <i className="fas fa-user-tie"></i>
          </a>
        </div>
        <div className="icons-block__item">
          <a href="#" className="icons-block__link">
            <i className="fas fa-shopping-basket"></i>
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
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="header__mobile-menu-block">
        <button className="header__mobile-menu-btn">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
