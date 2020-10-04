import React from 'react';

const TypeOfProduct = () => {
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Categories
      </a>
      {filter ? (
        <ul className={filter ? 'sidebar-filter__submenu active' : 'sidebar-filter__submenu'}>
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
      ) : null}
    </li>
  );
};

export default TypeOfProduct;
