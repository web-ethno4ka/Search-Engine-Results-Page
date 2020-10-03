import React from 'react';
import Button from '../button/button';

import TypeOfProduct from './categories/type-of-product';
import Seasons from './categories/seasons';
import TyreDimension from './categories/tyre-dimension';
import Index from './categories/index';
import Brands from './categories/brands';
import './vertical-filter.scss';

export default function VerticalFilter() {
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <aside className="aside-filter">
      <div className="sidebar-filter">
        <ul className="sidebar-filter__list">
          <TypeOfProduct toggler={toggle} />
          <Seasons />
          <TyreDimension />
          <Index />
          <Brands />
        </ul>
      </div>

      <Button buttonType={'aside-filter__btn--sorting mt'} buttonText="Sorting" />
    </aside>
  );
}
