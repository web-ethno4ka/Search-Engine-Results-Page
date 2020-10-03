import React from 'react';

const TypeOfProduct = (toggler) => {
  console.log(toggler);
  let prod = false;
  if (toggler) {
    return (prod = (
      <li className="sidebar-filter__item">
        <a className="sidebar-filter__category" onClick={toggler}>
          Categories
        </a>
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
    ));
  }
  // console.log(prod);
  // return (
  //   <li className="sidebar-filter__item">
  //     <a className="sidebar-filter__category" onclick={toggler}>
  //       Categories
  //     </a>
  //     <ul className="sidebar-filter__submenu">
  //       <li>
  //         <a href="#">Tyres</a>
  //       </li>
  //       <li>
  //         <a href="#">Wheels</a>
  //       </li>
  //       <li>
  //         <a href="#">Oils</a>
  //       </li>
  //       <li>
  //         <a href="#">Accesories</a>
  //       </li>
  //     </ul>
  //   </li>
  // );
};

export default TypeOfProduct;
