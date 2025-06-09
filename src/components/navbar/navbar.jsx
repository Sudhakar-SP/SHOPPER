import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart-icon.png';
import './navbar.css'; 
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext.jsx';

const Navbar = () => {

  const [menu, setmenu] = useState("Shop");
  const { cart } = useContext(ShopContext);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
        <p className="font-semibold text-lg">SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setmenu("Shop")}><Link to="/">Shop</Link>  {menu === "Shop" && <hr />}</li>
        <li onClick={() => setmenu("Mens")}><Link to="/Mens">Mens</Link> {menu === "Mens" && <hr />}</li>
        <li onClick={() => setmenu("Womens")}><Link to="/Womens">Womens</Link>  {menu === "Womens" && <hr />}</li>
        <li onClick={() => setmenu("Kids")}><Link to="/Kids">Kids</Link>  {menu === "Kids" && <hr />}</li>
      </ul>

      {/* Login and Cart */}
      <div className="flex items-center space-x-4">
        <Link to='/login'><button className='login'>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" className="h-6 cursor-pointer bg-clip-padding" /></Link>
        <div className="nav-cart-count">{Object.values(cart).reduce((a, b) => a + b, 0)}</div>
      </div>
    </div>
  );
};

export default Navbar;
