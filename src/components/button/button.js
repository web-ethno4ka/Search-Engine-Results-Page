import React from 'react';
import './button.scss';

export default function Button({ onclick, buttonType, buttonText }) {
  return (
    <React.Fragment>
      {/* <button className="filter-block__btn">Search</button> */}
      <button onClick={onclick} className={buttonType}>
        {buttonText}
      </button>
    </React.Fragment>
  );
}
