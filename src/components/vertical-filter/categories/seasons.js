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
        <div className="sidebar-filter__submenu">
          <div>
            <input type="radio" id="summer-season" name="seasons" value="summer" />
            <label htmlFor="summer-season">Summer</label>
          </div>
          <div>
            <input type="radio" id="winter-season" name="seasons" value="winter" />
            <label htmlFor="winter-season">Winter</label>
          </div>
          <div>
            <input type="radio" id="all-season" name="seasons" value="all-season" />
            <label htmlFor="all-season">All-season</label>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default Seasons;
