import React from 'react';
import './offers.css';
import exclusiveOffersImage from '../assets/ex-img.png'; // Make sure this path and file name are correct

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>CHECK NOW</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveOffersImage} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
