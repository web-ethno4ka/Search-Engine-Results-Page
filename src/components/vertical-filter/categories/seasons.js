import React from 'react';

const Seasons = () => {
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Season
      </a>
      {filter ? (
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
      ) : null}
    </li>
  );
};

export default Seasons;
