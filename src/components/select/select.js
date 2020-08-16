import React from 'react';
import './select.scss';

export default function Select({ labelName, inputWidth, optionValue }) {
  return (
    <div className="filter-block__item">
      <label>{labelName}</label>
      <select className={inputWidth}>
        <option selected value="Car">
          {optionValue}
        </option>
        <option value="Motorcycle">{optionValue}</option>
        <option disabled>{optionValue}</option>
        <option value="Offroad">{optionValue}</option>
        <option value="Speciality tyres">{optionValue}</option>
      </select>
    </div>
    //   <div className="filter-block__item">
    //   <label>Vehicle type</label>
    //   <select className="input-field--regular">
    //     <option selected value="Car">
    //       Cars
    //     </option>
    //     <option value="Motorcycle">Motorcycle</option>
    //     <option disabled>Truck</option>
    //     <option value="Offroad">Offroad</option>
    //     <option value="Speciality tyres">Speciality tyres</option>
    //   </select>
    // </div>
  );
}
