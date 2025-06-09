import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'
import instagramIcon from '../assets/i_img.png'
import Mailicon from '../assets/m_img.png'
import Whatsappicon from '../assets/w_img.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>   
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagramIcon} alt="" />
        </div>
         <div className="footer-icon-container">
            <img src={Whatsappicon} alt="" />
        </div>
         <div className="footer-icon-container">
            <img src={Mailicon} alt="" />
        </div>
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>copyrights @ 2025 - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
