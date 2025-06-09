import React, { useContext } from 'react';
import '../pages/css/shopcategory.css';
import { ShopContext } from '../context/shopcontext';
import Item from '../components/Item/Item.jsx';
import drop_down from '../components/assets/drop.png';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const filteredProducts = all_products.filter(p => p.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />

      <div className="shopcategory-controls">
        <p className="shopcategory-count">
          Showing 1–{all_products.filter(p => p.category === props.category).length} out of {all_products.length} products
        </p>
        <select className="shopcategory-sort-dropdown">
          <option value="">Price: High to Low</option>
          <option value="">Price: Low to High</option>
        </select>
      </div>


      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
