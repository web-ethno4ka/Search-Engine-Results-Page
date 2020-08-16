import React from 'react';
import Button from '../button/button';
import Rate from './rate';
import './product-card.scss';

export default function Product_card() {
  return (
    <div className="cards-block flex-row">
      <div className="cards-block__images cards-block--winter cards-block--best-price">
        <img src="./../../img/continental.png" alt="continental" className="cards-block__photo" />
        <img
          src="./../../img/continental_2.png"
          alt="continental"
          className="cards-block__photo-mobile"
        />
        <img
          src="./../../img/continental-logo.png"
          alt="continental-logo"
          className="cards-block__logo"
        />
      </div>

      <div className="cards-block__description">
        <h2>Continental WinterContact TS 850P</h2>
        <h3>
          225/40 R18 92V <br /> Car - Winter
        </h3>
        <div className="cards-block__links">
          <span>Quicklink to the offer:</span>
          <p className="cards-block__item">
            <a href="#">mytyres.co.uk</a>
            <a href="#">$128.4</a>
          </p>
          {/* <p className="cards-block__item">
            <a href="#">autopink-shop.co.uk</a>
            <a href="#">$120.9</a>
          </p>
          <p className="cards-block__item">
            <a href="#">tirendo.co.uk</a>
            <a href="#">$132.0</a>
          </p> */}
        </div>
        <div className="tyre-characteristics">
          <a href="#" className="tyre-characteristics__link fuel-efficiency">
            B
          </a>
          <a href="#" className="tyre-characteristics__link wet-grip">
            A
          </a>
          <a href="#" className="tyre-characteristics__link noise-emission">
            75 dB
          </a>
        </div>
      </div>

      <div className="cta-block">
        <span className="cta-block__price">$120.9 — $132.0</span>
        <div className="cta-block__discount">
          <span>22 offers</span>
          <span>-17%</span>
        </div>
        <Button buttonType={'cta-block__btn-offers'} buttonText="See all offers" />
        <Button buttonType={'cta-block__btn-cart'} buttonText="Add to cart" />
        {/* <button className="cta-block__btn-offers">See all offers</button>
        <button className="cta-block__btn-cart">Add to cart</button> */}
        <Rate />
      </div>
    </div>
  );
}
