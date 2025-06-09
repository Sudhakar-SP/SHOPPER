import React from 'react';
import './popular.css';
import data_product from '../assets/data.js';
import Item from '../item/item.jsx'; // Unified casing to match other imports

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
