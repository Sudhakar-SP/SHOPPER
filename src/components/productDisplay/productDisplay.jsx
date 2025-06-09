import React, { useContext } from 'react';
import './productDisplay.css';
import starIcon from '../assets/Rating.jpg';
import { ShopContext } from '../../context/shopcontext.jsx';

const ProductDisplay = ({ product }) => {
  const { addtocart } = useContext(ShopContext);

  if (!product) {
    return <div className="product-display-error">Product not found.</div>;
  }

  return (
    <div className='product-display'>
      {/* Left Section - Image List */}
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          {[...Array(4)].map((_, idx) => (
            <img
              key={idx}
              src={product.image}
              alt={`Product view ${idx + 1}`}
              className="productDisplay-img-thumb"
            />
          ))}
        </div>
        <img
          src={product.image}
          alt="Main Product"
          className="productDisplay-main-img"
        />
      </div>


      {/* Right Section - Product Details */}
      <div className="productDisplay-right">
        <h1 className="productDisplay-title">{product.name}</h1>

        {/* Star Rating */}
        <div className="productDisplay-right-star">
          {[...Array(1)].map((_, index) => (
            <img
              key={index}
              src ={starIcon}
              width="20"
              alt="star"
            />
          ))}
          <span>(123 reviews)</span>
        </div>

        {/* Price */}
        <div className="productDisplay-right-price">
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
        </div>

        {/* Description */}
        <div className="productDisplay-right-description">
          A lightweight, quality knit fabric, close-fitting with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>

        {/* Size Selector */}
        <div className="productDisplay-right-size">
          <h2>Select Size</h2>
          <div className="productDisplay-right-size-options">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button className="productDisplay-right-button" onClick={()=>{addtocart(product.id)}}>Add To Cart</button>

        {/* Category & Tags */}
        <p className="productDisplay-right-category">
          <span>Category:</span> {product.category}
        </p>
        <p className="productDisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
