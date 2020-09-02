import React from 'react';
import './select.scss';

export default function Select({ typeOfBlock, labelName, inputWidth, options }) {
  console.log(options, labelName, inputWidth);
  return (
    <div className={typeOfBlock}>
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
