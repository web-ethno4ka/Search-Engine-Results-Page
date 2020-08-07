import React from 'react';
import './rate.scss';

export default function Rate() {
  return (
    <div className="rate-block">
      <ul className="rate-block__stars">
        <li className="rate-block__star"></li>
        <li className="rate-block__star"></li>
        <li className="rate-block__star"></li>
        <li className="rate-block__star"></li>
        <li className="rate-block__star-empty"></li>
      </ul>
      <p className="rate-block__description">Test average score (4)</p>
    </div>
  );
}
