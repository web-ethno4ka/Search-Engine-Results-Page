import React from 'react';

const TypeOfProduct = ({ selectType }) => {
  const [showFilter, show] = React.useState(false);

  const toggle = () => {
    show(!showFilter);
  };

  const chooseFilter = (e) => {
    selectType(e.target.value);
  };

  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Categories
      </a>
      {showFilter ? (
        <div className="sidebar-filter__submenu">
          <div>
            <input
              type="radio"
              id="tyres-option"
              name="categories"
              value="tyres"
              onChange={chooseFilter}
            />
            <label htmlFor="tyres-option">Tyres</label>
          </div>
          <div>
            <input
              type="radio"
              id="wheels-option"
              name="categories"
              value="wheels"
              onChange={chooseFilter}
            />
            <label htmlFor="wheels-option">Wheels</label>
          </div>
          <div>
            <input
              type="radio"
              id="oils-option"
              name="categories"
              value="oils"
              onChange={chooseFilter}
            />
            <label htmlFor="oils-option">Oils</label>
          </div>
          <div>
            <input
              type="radio"
              id="accesories-option"
              name="categories"
              value="accesories"
              onChange={chooseFilter}
            />
            <label htmlFor="accesories-option">Accesories</label>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default TypeOfProduct;

{
  /* <li>
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
          </li> */
}
