import React from 'react';
import './breadcrumbs.scss';

export default function Breadcrumbs() {
  return (
    <React.Fragment>
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            Home
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            Tyres
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            Cars
          </a>
        </li>
        <li className="breadcrumbs__item">Winter tyres</li>
      </ul>
    </React.Fragment>
  );
}
