import React from 'react';

const Seasons = () => {
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category">Season</a>
      <ul className="sidebar-filter__submenu">
        <li>
          <a href="#">Summer</a>
        </li>
        <li>
          <a href="#">Winter</a>
        </li>
        <li>
          <a href="#">All-season</a>
        </li>
      </ul>
    </li>
  );
};

export default Seasons;
