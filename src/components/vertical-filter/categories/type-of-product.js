import React from 'react';

const Type_of_product = () => {
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category ">Categories</a>
      <ul className="sidebar-filter__submenu">
        <li>
          <a href="#">Tyres</a>
        </li>
        <li>
          <a href="#">Wheels</a>
        </li>
        <li>
          <a href="#">Oils</a>
        </li>
        <li>
          <a href="#">Accesories</a>
        </li>
      </ul>
    </li>
  );
};

export default Type_of_product;
