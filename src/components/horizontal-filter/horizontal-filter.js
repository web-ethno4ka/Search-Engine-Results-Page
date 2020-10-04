import React from 'react';
import Select from '../select/select';
import Button from '../button/button';
import './horizontal-filter.scss';

export default function HorizontalFilter() {
  const [options, setOptions] = React.useState([
    ['Car tyres', 'Motorcycle tyres', 'Van tyres', 'Offroad tyres', 'All tyres'],
    ['Winter tyres', 'Summer tyres', 'All-season tyres', 'All tyres'],
    [225, 215, 195, 186, 170],
    [50, 45, 40, 35, 30],
    [20, 19, 18, 17, 16],
  ]);
  return (
    <React.Fragment>
      <div className="filter-block">
        <h3>Selected filters:</h3>
        <div className="filter-block__wrapper flex-row">
          <Select
            typeOfBlock={'filter-block__item'}
            labelName={'Vehicle type'}
            inputWidth={'input-field--regular'}
            options={options[0]}
          />
          <Select
            typeOfBlock={'filter-block__item'}
            labelName={'Tyre type'}
            inputWidth={'input-field--regular'}
            options={options[1]}
          />
          <Select
            typeOfBlock={'filter-block__item'}
            labelName={'Width'}
            inputWidth={'input-field--shorter'}
            options={options[2]}
          />
          <Select
            typeOfBlock={'filter-block__item'}
            labelName={'Height'}
            inputWidth={'input-field--shorter'}
            options={options[3]}
          />
          <Select
            typeOfBlock={'filter-block__item'}
            labelName={'Diameter'}
            inputWidth={'input-field--shorter'}
            options={options[4]}
          />
          <Button buttonType={'filter-block__btn'} buttonText="Search" />
        </div>
      </div>
    </React.Fragment>
  );
}
