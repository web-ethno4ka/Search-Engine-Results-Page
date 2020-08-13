import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links-blocks">
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">Tyre Brands</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Bridgestone</a>
            </li>
            <li className="links-block__item">
              <a href="#">Nankang</a>
            </li>
            <li className="links-block__item">
              <a href="#">Schwalbe</a>
            </li>
            <li className="links-block__item">
              <a href="#">Accelera</a>
            </li>
            <li className="links-block__item">
              <a href="#">Barum</a>
            </li>
          </ul>
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">Winter tyres</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Bridgestone</a>
            </li>
            <li className="links-block__item">
              <a href="#">Continental</a>
            </li>
            <li className="links-block__item">
              <a href="#">Nokian</a>
            </li>
            <li className="links-block__item">
              <a href="#">Hankook</a>
            </li>
            <li className="links-block__item">
              <a href="#">Kumho</a>
            </li>
          </ul>
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">Car tyres</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Micheline</a>
            </li>
            <li className="links-block__item">
              <a href="#">Goodyear</a>
            </li>
            <li className="links-block__item">
              <a href="#">Pirelli</a>
            </li>
            <li className="links-block__item">
              <a href="#">Fulda</a>
            </li>
            <li className="links-block__item">
              <a href="#">Avon</a>
            </li>
          </ul>
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">Blog</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Brand news</a>
            </li>
            <li className="links-block__item">
              <a href="#">Press release</a>
            </li>
            <li className="links-block__item">
              <a href="#">Entertainment</a>
            </li>
            <li className="links-block__item">
              <a href="#">General info</a>
            </li>
            <li className="links-block__item">
              <a href="#">Tips and tricks</a>
            </li>
          </ul>
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">TyresNET</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Legal Information</a>
            </li>
            <li className="links-block__item">
              <a href="#">Shop Registration</a>
            </li>
            <li className="links-block__item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="links-block__item">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="links-block__item">
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul className="links-block">
            <li className="links-block__item">
              <b>
                <a href="#">Offer</a>
              </b>
            </li>
            <li className="links-block__item">
              <a href="#">Summer tyres</a>
            </li>
            <li className="links-block__item">
              <a href="#">Winter tyres</a>
            </li>
            <li className="links-block__item">
              <a href="#">Motorcycle tyres</a>
            </li>
            <li className="links-block__item">
              <a href="#">Bicycle tyres</a>
            </li>
            <li className="links-block__item">
              <a href="#">Oils and lubricants</a>
            </li>
          </ul>
        </div>

        <div className="footer__socials-languages-block">
          <div className="footer__socials-block">
            <div className="footer__socials-item">
              <a href="#" className="footer__socials-link">
                <FontAwesomeIcon icon={faGooglePlusG} />
                {/* <i className="fab fa-google-plus-g"></i> */}
              </a>
            </div>
            <div className="footer__socials-item">
              <a href="#" className="footer__socials-link">
                <FontAwesomeIcon icon={faFacebookF} />
                {/* <i className="fab fa-facebook-f"></i> */}
              </a>
            </div>
            <div className="footer__socials-item">
              <a href="#" className="footer__socials-link">
                <FontAwesomeIcon icon={faInstagram} />
                {/* <i className="fab fa-instagram"></i> */}
              </a>
            </div>
            <div className="footer__socials-item">
              <a href="#" className="footer__socials-link">
                <FontAwesomeIcon icon={faTwitter} />
                {/* <i className="fab fa-twitter"></i> */}
              </a>
            </div>
            <div className="footer__socials-item">
              <a href="#" className="footer__socials-link">
                <FontAwesomeIcon icon={faYoutube} />
                {/* <i className="fab fa-youtube"></i> */}
              </a>
            </div>
          </div>

          <ul className="footer__languages-block">
            <li id="germ">
              <a href="#"></a>
            </li>
            <li id="fr">
              <a href="#"></a>
            </li>
            <li id="sw">
              <a href="#"></a>
            </li>
            <li id="se">
              <a href="#"></a>
            </li>
            <li id="it">
              <a href="#"></a>
            </li>
            <li id="no">
              <a href="#"></a>
            </li>
            <li id="dk">
              <a href="#"></a>
            </li>
            <li id="nl">
              <a href="#"></a>
            </li>
            <li id="uk">
              <a href="#"></a>
            </li>
            <li id="us">
              <a href="#"></a>
            </li>
            <li id="es">
              <a href="#"></a>
            </li>
            <li id="at">
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
