import React from 'react';

const Brands = () => {
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Brands
      </a>
      {filter ? (
        <ul className="sidebar-filter__submenu">
          <li>
            <input type="checkbox" name="Pirelli" id="item" />
            <label htmlFor="item">&nbsp;Pirelli</label>
          </li>
          <li>
            <input type="checkbox" name="Continental" id="item1" />
            <label htmlFor="item1">&nbsp;Continental</label>
          </li>
          <li>
            <input type="checkbox" name="Michelin" id="item2" />
            <label htmlFor="item2">&nbsp;Michelin</label>
          </li>
          <li>
            <input type="checkbox" name="Goodyear" id="item3" />
            <label htmlFor="item3">&nbsp;Goodyear</label>
          </li>
          <li>
            <input type="checkbox" name="Falken" id="item4" />
            <label htmlFor="item4">&nbsp;Falken</label>
          </li>
          <li>
            <input type="checkbox" name="Bridgestone" id="item5" />
            <label htmlFor="item5">&nbsp;Bridgestone</label>
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default Brands;
