// src/pages/shop.jsx (or wherever you are using it)
import React from 'react';
import Hero from '../components/Hero/hero'; // make sure path is correct
import Popular from '../components/popular/popular'; 
import Offers from '../components/Offers/offers';// make sure path is correct
import Newcollection from '../Newcollection/Newcollection';
import Newsletter from '../components/Newsletter/newsletter'; // make sure path is correct

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <Newcollection />
      <Newsletter/>
    </div>
  );
};

export default Shop;
