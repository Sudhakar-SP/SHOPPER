import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Footer from './components/footer/footer.jsx';
import men_banner from '../src/components/assets/men_banner.png';
import women_banner from '../src/components/assets/women_banner.png';
import kids_banner from '../src/components/assets/kids_banner.png';

import Shop from './pages/shop.jsx';
import ShopCategory from './pages/shopcategory.jsx';
import Product from './pages/product.jsx'; // ✅ use Product
import Cart from './pages/cart.jsx';
import LoginSignup from './pages/loginsignup.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="Men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="Women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="Kid" />} />
          <Route path="/product/:productId" element={<Product />} /> {/* ✅ Fixed path */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
