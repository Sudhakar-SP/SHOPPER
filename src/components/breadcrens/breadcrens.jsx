import React from 'react';
import './breadcrens.css';
import Arrow_icon from '../assets/arrow-icon.png';

const Breadcrens = ({ product }) => {
  return (
    <div className='breadcrens'>
      <span>HOME</span>
      <img src={Arrow_icon} alt=">" />
      <span>SHOP</span>
      <img src={Arrow_icon} alt=">" />
      <span>{product.category}</span>
      <img src={Arrow_icon} alt=">" />
      <span>{product.name}</span>
    </div>

  );
};

export default Breadcrens;
