import React from 'react';
import './select.scss';

export default function Select() {
  return (
    <div className="filter-block__item">
      <label>Vehicle type</label>
      <select className="input-field--regular">
        <option selected value="Car">
          Cars
        </option>
        <option value="Motorcycle">Motorcycle</option>
        <option disabled>Truck</option>
        <option value="Offroad">Offroad</option>
        <option value="Speciality tyres">Speciality tyres</option>
      </select>
    </div>
  );
}
