import React from 'react';
import './pagination.scss';

export default function Pagination() {
  return (
    <div className="pagination flex-row">
      <a href="#" className="pagination__item">
        1
      </a>
      <a href="#" className="pagination__item">
        2
      </a>
      <a href="#" className="pagination__item pagination__item--active">
        3
      </a>
      <a href="#" className="pagination__item">
        4
      </a>
      <a href="#" className="pagination__item">
        5
      </a>
      <a href="#" className="pagination__item">
        Next
      </a>
    </div>
  );
}
