import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../context/shopcontext.jsx';
import remove_icon from '../assets/remove_icon.png';

const CartItems = () => {
  const { all_products, cart, addtocart, removefromcart } = useContext(ShopContext);

  // Calculate subtotal dynamically
  const subtotal = all_products.reduce((acc, product) => {
    return cart[product.id] > 0 ? acc + product.new_price * cart[product.id] : acc;
  }, 0);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_products.some(e => cart[e.id] > 0) ? (
          all_products.map((e) => {
            if (cart[e.id] > 0) {
              return (
                <React.Fragment key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cart[e.id]}</button>
                    <p>${(e.new_price * cart[e.id]).toFixed(2)}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removefromcart(e.id)} alt="" />
                  </div>
                  <hr />
                </React.Fragment>
              );
            }
            return null;
          })
        ) : (
          <div className="cartitems-empty">Your cart is empty.</div>
        )}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>CART TOTALS</h1>
            <div className="cartitems-total-item">
              <p>Subtotals</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr className="cartitems-divider" />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr className="cartitems-divider" />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>
            <hr className="cartitems-divider" />
          </div>
          <div className="cartitems-checkout">
            <button className='cartitems-checkout-button'>Proceed to Checkout</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode , Enter it Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Enter your promocode' className='cartitems-promocode-input' />
            <button className='cartitems-promocode-button'>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
