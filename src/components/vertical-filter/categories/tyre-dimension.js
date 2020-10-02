import React from 'react';
import Select from '../../select/select';

const Tyre_dimension = () => {
  const [options, setOptions] = React.useState([
    [225, 215, 195, 186, 170],
    [50, 45, 40, 35, 30],
    [20, 19, 18, 17, 16],
  ]);

  return (
    <li className="sidebar-filter__item">
      <a className="sidebar-filter__category">Tyre dimension</a>
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
    </li>
  );
};

export default Tyre_dimension;
