import React from 'react';
import Button from '../button/button';
import Select from '../select/select';
import './vertical-filter.scss';

export default function Vertical_filter() {
  return (
    <aside className="aside-filter">
      <Button />
      {/* <button className="aside-filter__btn aside-filter__btn--remove">Remove filters</button> */}

      <div className="sidebar-filter">
        <ul className="sidebar-filter__list">
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Categories</a>
            <ul className="sidebar-filter__submenu">
              <li>
                <a href="#">Tyres</a>
              </li>
              <li>
                <a href="#">Wheels</a>
              </li>
              <li>
                <a href="#">Oils</a>
              </li>
              <li>
                <a href="#">Accesories</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Season</a>
            <ul className="sidebar-filter__submenu">
              <li>
                <a href="#">Summer</a>
              </li>
              <li>
                <a href="#">Winter</a>
              </li>
              <li>
                <a href="#">All-season</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Tyre dimension</a>
            <div className="sidebar-filter__submenu sidebar-filter__submenu-dimension flex-row">
              <Select labelName={Width} />
              <Select labelName={Width} />
              <Select />
              {/* <div className="sidebar-filter__dimension-parameter">
                <label>Width</label>
                <select className="input-field--shortest">
                  <option selected value="225">
                    225
                  </option>
                  <option value="215">215</option>
                  <option value="205">205</option>
                  <option value="195">195</option>
                  <option value="185">185</option>
                </select>
              </div>
              <div className="sidebar-filter__dimension-parameter">
                <label>Height</label>
                <select className="input-field--shortest">
                  <option selected value="50">
                    50
                  </option>
                  <option value="45">45</option>
                  <option value="40">40</option>
                  <option value="35">35</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div className="sidebar-filter__dimension-parameter">
                <label>Diameter</label>
                <select className="input-field--shortest">
                  <option selected value="20">
                    20
                  </option>
                  <option value="19">19</option>
                  <option value="18">18</option>
                  <option value="17">17</option>
                  <option value="16">16</option>
                </select>
              </div> */}
            </div>
          </li>
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Index</a>
            <div className="sidebar-filter__submenu">
              <Select />
              <Select />
              {/* <div className="sidebar-filter__index-parameter">
                <label>Load index</label>
                <select className="input-field--regular">
                  <option selected value="225">
                    225
                  </option>
                  <option value="215">215</option>
                  <option value="205">205</option>
                  <option value="195">195</option>
                  <option value="185">185</option>
                </select>
              </div>
              <div className="sidebar-filter__index-parameter">
                <label>Speed index</label>
                <select className="input-field--regular">
                  <option selected value="50">
                    50
                  </option>
                  <option value="45">45</option>
                  <option value="40">40</option>
                  <option value="35">35</option>
                  <option value="30">30</option>
                </select>
              </div> */}
            </div>
          </li>
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Brands</a>
            <ul className="sidebar-filter__submenu">
              <li>
                <input type="checkbox" name="Pirelli" id="item" checked />
                <label for="item">&nbsp;Pirelli</label>
              </li>
              <li>
                <input type="checkbox" name="Continental" id="item1" />
                <label for="item1">&nbsp;Continental</label>
              </li>
              <li>
                <input type="checkbox" name="Michelin" id="item2" />
                <label for="item2">&nbsp;Michelin</label>
              </li>
              <li>
                <input type="checkbox" name="Goodyear" id="item3" />
                <label for="item3">&nbsp;Goodyear</label>
              </li>
              <li>
                <input type="checkbox" name="Falken" id="item4" />
                <label for="item4">&nbsp;Falken</label>
              </li>
              <li>
                <input type="checkbox" name="Bridgestone" id="item5" />
                <label for="item5">&nbsp;Bridgestone</label>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Button />
      <Button />
      {/* <button className="aside-filter__btn aside-filter__btn--mobile">Show filters</button>

      <button className="aside-filter__btn aside-filter__btn--mobile">Sorting</button> */}
    </aside>
  );
}
