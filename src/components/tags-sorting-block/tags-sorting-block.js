import React from 'react';
import Select from '../select/select';
import Tags_block from './tags-block';

export default function Tags_sorting_block() {
  return (
    <div className="tags-sorting-block">
      <Tags_block />
      {/* <li className="tags-block__item">
          <a href="#" className="tags-block__link">
            Load index: 225
          </a>
        </li>
        <li className="tags-block__item">
          <a href="#" className="tags-block__link">
            Pirelli
          </a>
        </li>
        <li className="tags-block__item">
          <a href="#" className="tags-block__link">
            Diameter: 19
          </a>
        </li> */}

      <div className="sorting-block">
        <Select />
        {/* <div className="sorting-block__item">
          <label>Sorting: &nbsp;</label>
          <select className="input-field--shorter">
            <option selected value="Popularity">
              Popularity
            </option>
            <option value="Relevance">Relevance</option>
            <option value="Price ascending">Price ascending</option>
            <option value="Price descending">Price descending</option>
            <option value="Average rate">Average rate</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}
