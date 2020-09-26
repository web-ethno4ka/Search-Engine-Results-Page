import React from 'react';
import Button from '../button/button';
import Rate from './rate';
import './product-card.scss';
import continentalTyre from './../../img/continental.png';
import continentalTyreForMobile from './../../img/continental_2.png';
import continentalLogo from './../../img/continental-logo.png';

export default function Product_card() {
  const [links, setLinks] = React.useState([
    { link: 'mytyres.co.uk', price: '$128.4' },
    { link: 'autopink-shop.co.uk', price: '$140.1' },
    { link: 'tirendo.co.uk', price: '$132.3' },
  ]);
  return (
    <div className="cards-block flex-row">
      <div className="cards-block__images cards-block--winter cards-block--best-price">
        <img src={continentalTyre} alt="continental" className="cards-block__photo" />
        <img
          src={continentalTyreForMobile}
          alt="continental"
          className="cards-block__photo-mobile"
        />
        <img src={continentalLogo} alt="continental-logo" className="cards-block__logo" />
      </div>

      <div className="cards-block__description">
        <h2>Continental WinterContact TS 850P</h2>
        <h3>
          225/40 R18 92V <br /> Car - Winter
        </h3>
        <div className="cards-block__links">
          <span>Quicklink to the offer:</span>
          {Object.values(links).map(({ link, price }, index) => (
            <p className="cards-block__item" key={index}>
              <a href={link}>{link}</a>
              <a href="#">{price}</a>
            </p>
          ))}
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
