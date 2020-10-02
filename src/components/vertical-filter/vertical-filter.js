import React from 'react';
import Button from '../button/button';

import Type_of_product from './categories/type-of-product';
import Seasons from './categories/seasons';
import Tyre_dimension from './categories/tyre-dimension';
import Index from './categories/index';
import Brands from './categories/brands';
import './vertical-filter.scss';

export default function Vertical_filter() {
  return (
    <aside className="aside-filter">
      <div className="sidebar-filter">
        <ul className="sidebar-filter__list">
          <Type_of_product />
          <Seasons />
          <Tyre_dimension />
          <Index />
          <Brands />
        </ul>
      </div>

      <Button buttonType={'aside-filter__btn--sorting mt'} buttonText="Sorting" />
    </aside>
  );
}
