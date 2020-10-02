import React from 'react';

const Brands = () => {
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category">Brands</a>
      <ul className="sidebar-filter__submenu">
        <li>
          <input type="checkbox" name="Pirelli" id="item" checked />
          <label for="item">&nbsp;Pirelli</label>
        </li>
        <li>
          <input type="checkbox" name="Continental" id="item1" />
          <label for="item1">&nbsp;Continental</label>
        </li>
        <li>
          <input type="checkbox" name="Michelin" id="item2" />
          <label for="item2">&nbsp;Michelin</label>
        </li>
        <li>
          <input type="checkbox" name="Goodyear" id="item3" />
          <label for="item3">&nbsp;Goodyear</label>
        </li>
        <li>
          <input type="checkbox" name="Falken" id="item4" />
          <label for="item4">&nbsp;Falken</label>
        </li>
        <li>
          <input type="checkbox" name="Bridgestone" id="item5" />
          <label for="item5">&nbsp;Bridgestone</label>
        </li>
      </ul>
    </li>
  );
};

export default Brands;
