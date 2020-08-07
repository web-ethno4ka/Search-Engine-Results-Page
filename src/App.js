import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Horizontal_filter from './components/horizontal-filter/horizontal-filter';
import Vertical_filter from './components/vertical-filter/vertical-filter';
import Product_card from './components/product-card/product-card';
import Pagination from './components/pagination/pagination';
import Tags_sorting_block from './components/tags-sorting-block/tags-sorting-block';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header />
        <Breadcrumbs />
        <main className="main">
          <Horizontal_filter />
          <h1 className="heading-block">Jetzt Reifen günstig online kaufen und vergleichen</h1>
          <section className="serp-block">
            <Vertical_filter />
            <section className="search-results-block">
              <Tags_sorting_block />
              <Product_card />
              <Product_card />
              <Product_card />
              <Product_card />
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
