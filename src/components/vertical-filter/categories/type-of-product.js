import React from 'react';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import Fade from 'react-reveal/Fade';

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
        <div className="sidebar-filter__submenu">
          <div>
            <input type="radio" id="tyres-option" name="categories" value="tyres" />
            <label htmlFor="tyres-option">Tyres</label>
          </div>
          <div>
            <input type="radio" id="wheels-option" name="categories" value="wheels" />
            <label htmlFor="wheels-option">Wheels</label>
          </div>
          <div>
            <input type="radio" id="oils-option" name="categories" value="oils" />
            <label htmlFor="oils-option">Oils</label>
          </div>
          <div>
            <input type="radio" id="accesories-option" name="categories" value="accesories" />
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
