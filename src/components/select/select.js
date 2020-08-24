import React from 'react';
import './select.scss';

export default function Select({ labelName, inputWidth, options }) {
  return (
    <div className="filter-block__item">
      <label>{labelName}</label>
      <select className={inputWidth}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
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
