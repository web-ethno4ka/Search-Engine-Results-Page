import React from 'react';
import './button.scss';

export default function Button({ onBtnClick, buttonType, buttonText }) {
  return (
    <React.Fragment>
      {/* <button className="filter-block__btn">Search</button> */}
      <button onClick={onBtnClick} className={buttonType}>
        {buttonText}
      </button>
    </React.Fragment>
  );
}
