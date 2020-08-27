import React from 'react';
import './select.scss';

export default function Select({ labelName, inputWidth, options }) {
  console.log(options, labelName, inputWidth);
  return (
    <div className="filter-block__item">
      <label>{labelName}</label>
      <select className={inputWidth}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
