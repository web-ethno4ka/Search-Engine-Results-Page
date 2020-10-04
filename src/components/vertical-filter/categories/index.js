import React from 'react';
import Select from '../../select/select';

const Index = () => {
  const [options, setOptions] = React.useState([
    [50, 45, 40, 35, 30],
    ['H(210km/h)', 'N(140km/h)', 'S(180km/h)', 'V(240km/h)', 'Y(300km/h)'],
  ]);
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Index
      </a>
      {filter ? (
        <div className="sidebar-filter__submenu">
          <Select
            typeOfBlock={'sidebar-filter__index-parameter'}
            labelName={'Load Index'}
            inputWidth={'input-field--regular'}
            options={options[0]}
          />
          <Select
            typeOfBlock={'sidebar-filter__index-parameter'}
            labelName={'Speed Index'}
            inputWidth={'input-field--regular'}
            options={options[1]}
          />
        </div>
      ) : null}
    </li>
  );
};

export default Index;
