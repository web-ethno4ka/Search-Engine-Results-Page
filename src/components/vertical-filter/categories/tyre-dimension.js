import React from 'react';
import Select from '../../select/select';

const TyreDimension = () => {
  const [options, setOptions] = React.useState([
    [225, 215, 195, 186, 170],
    [50, 45, 40, 35, 30],
    [20, 19, 18, 17, 16],
  ]);
  const [filter, setFilter] = React.useState(false);
  const toggle = () => {
    setFilter(!filter);
  };

  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category" onClick={toggle}>
        Tyre dimension
      </a>
      {filter ? (
        <div className="sidebar-filter__submenu sidebar-filter__submenu-dimension flex-row">
          <Select
            typeOfBlock={'sidebar-filter__dimension-parameter'}
            labelName={'Width'}
            inputWidth={'input-field--shortest'}
            options={options[0]}
          />
          <Select
            typeOfBlock={'sidebar-filter__dimension-parameter'}
            labelName={'Height'}
            inputWidth={'input-field--shortest'}
            options={options[1]}
          />
          <Select
            typeOfBlock={'sidebar-filter__dimension-parameter'}
            labelName={'Diameter'}
            inputWidth={'input-field--shortest'}
            options={options[2]}
          />
        </div>
      ) : null}
    </li>
  );
};

export default TyreDimension;
