import React from 'react';
import './App.scss';
import Button from './components/button/button';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import HorizontalFilter from './components/horizontal-filter/horizontal-filter';
import VerticalFilter from './components/vertical-filter/vertical-filter';
import ProductCard from './components/product-card/product-card';
import Pagination from './components/pagination/pagination';
import TagsSortingBlock from './components/tags-sorting-block/tags-sorting-block';
import Footer from './components/footer/footer';
import { Context } from './context/context';

function App() {
  const [filter, setFilter] = React.useState(false);
  const [typeOfProduct, setTypeOfProduct] = React.useState(null);
  const [chooseFilter] = React.useContext(Context);
  const toggle = () => {
    setFilter(!filter);
  };
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header />
        <Breadcrumbs />
        <main className="main">
          <HorizontalFilter />
          <h1 className="heading-block">Jetzt Reifen günstig online kaufen und vergleichen</h1>
          <section className="serp-block">
            <div className="column-direction">
              <Button
                buttonType={'aside-filter__btn'}
                buttonText="Show filters"
                onBtnClick={toggle}
              />
              {filter ? <VerticalFilter onChange={chooseFilter} /> : null}
              {/* setTypeOfProduct={setTypeOfProduct} */}
              <Button
                buttonType={'aside-filter__btn mt'}
                buttonText="Remove filters"
                onBtnClick={toggle}
              />
            </div>

            <section className="search-results-block">
              <TagsSortingBlock tags={[typeOfProduct]} />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <Pagination />
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
