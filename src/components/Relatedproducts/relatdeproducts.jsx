import React from 'react';
import './relatedproducts.css';
import data_product from '../assets/data.js';
import Item from '../item/item.jsx';

const RelatedProducts = ({ currentProduct }) => {
  if (!currentProduct) {
    console.warn('RelatedProducts: currentProduct is undefined');
    return <p>No product selected</p>;
  }

  const relatedItems = data_product.filter(
    (item) =>
      item.category === currentProduct.category &&
      item.id !== currentProduct.id
  );

  console.log('Current Product:', currentProduct);
  console.log('Filtered Related Items:', relatedItems);

  return (
    <div className='relatdeproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedItems.length === 0 ? (
          <p>No related products found.</p>
        ) : (
          relatedItems.slice(0, 4).map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
