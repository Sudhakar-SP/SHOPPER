import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/productDisplay.jsx';
import Breadcrens from '../components/breadcrens/breadcrens.jsx';
import all_products from '../components/assets/all_products.js';
import Descriptionbox from '../components/descriptionbox/descriptionbox.jsx';
import RelatedProducts from '../components/Relatedproducts/relatdeproducts.jsx';

const Product = () => {
  const { productId } = useParams();
  const product = all_products.find((item) => item.id === Number(productId));

  return (
    <div>
      <Breadcrens product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts currentProduct={product} />
    </div>
  );
};

export default Product;
