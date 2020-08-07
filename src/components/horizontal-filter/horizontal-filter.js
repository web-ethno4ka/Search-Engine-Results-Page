import React from 'react';
import Select from '../select/select';
import Button from '../button/button';

export default function Horizontal_filter() {
  return (
    <React.Fragment>
      <div className="filter-block">
        <h3>Selected filters:</h3>
        <div className="filter-block__wrapper flex-row">
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />

          {/* <div className="filter-block__item">
            <label>Tyre type</label>
            <select className="input-field--regular">
              <option selected value="Winter tyres">
                Winter tyres
              </option>
              <option value="Summer tyres">Summer tyres</option>
              <option value="All-season tyres">All-season tyres</option>
            </select>
          </div>
          <div className="filter-block__item">
            <label>Width</label>
            <select className="input-field--shorter">
              <option selected value="225">
                225
              </option>
              <option value="215">215</option>
              <option value="205">205</option>
              <option value="195">195</option>
              <option value="185">185</option>
            </select>
          </div>
          <div className="filter-block__item">
            <label>Height</label>
            <select className="input-field--shorter">
              <option selected value="50">
                50
              </option>
              <option value="45">45</option>
              <option value="40">40</option>
              <option value="35">35</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="filter-block__item">
            <label>Diameter</label>
            <select className="input-field--shorter">
              <option selected value="20">
                20
              </option>
              <option value="19">19</option>
              <option value="18">18</option>
              <option value="17">17</option>
              <option value="16">16</option>
            </select>
          </div> */}
          <Button />
          {/* <button className="filter-block__btn">Search</button> */}
        </div>
      </div>
    </React.Fragment>
  );
}
