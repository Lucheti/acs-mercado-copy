//Dependencies
import React from 'react';
//Internals
import './index.css';
import Items from './Items';

const ItemPage = ({productMapper}) => (
  <div data-cy='all-products' className="page-products">
    <div className="page-title">
      <h4>Items</h4>
    </div>
    <Items productMapper={productMapper} />
  </div>
);

export default ItemPage;
