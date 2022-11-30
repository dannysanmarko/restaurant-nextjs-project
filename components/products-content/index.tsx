import { omit } from "lodash";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "store/reducers/product";

import List from "./list";

const ProductsContent = ({totalPlatos} : any) => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
 

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Nuestros platos: <span>({totalPlatos})</span>
        </h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters"></i>
        </button>
        <form
          className={`products-content__filter ${
            orderProductsOpen ? "products-order-open" : ""
          }`}
        >
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};

export default ProductsContent;
