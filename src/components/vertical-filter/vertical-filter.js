import React from 'react';
import Button from '../button/button';
import Select from '../select/select';
import './vertical-filter.scss';

export default function Vertical_filter() {
  const [options, setOptions] = React.useState([
    [225, 215, 195, 186, 170],
    [50, 45, 40, 35, 30],
    [20, 19, 18, 17, 16],
    [50, 45, 40, 35, 30],
    ['H(210km/h)', 'N(140km/h)', 'S(180km/h)', 'V(240km/h)', 'Y(300km/h)'],
  ]);

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
              <Select
                typeOfBlock={'sidebar-filter__dimension-parameter'}
                labelName={'Width'}
                inputWidth={'input-field--shortest'}
                options={options[0]}
              />
              <Select
                typeOfBlock={'sidebar-filter__dimension-parameter'}
                labelName={'Height'}
                inputWidth={'input-field--shortest'}
                options={options[1]}
              />
              <Select
                typeOfBlock={'sidebar-filter__dimension-parameter'}
                labelName={'Diameter'}
                inputWidth={'input-field--shortest'}
                options={options[2]}
              />
            </div>
          </li>
          <li className="sidebar-filter__item">
            <a className="sidebar-filter__category">Index</a>
            <div className="sidebar-filter__submenu">
              <Select
                typeOfBlock={'sidebar-filter__index-parameter'}
                labelName={'Load Index'}
                inputWidth={'input-field--regular'}
                options={options[3]}
              />
              <Select
                typeOfBlock={'sidebar-filter__index-parameter'}
                labelName={'Speed Index'}
                inputWidth={'input-field--regular'}
                options={options[4]}
              />
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
