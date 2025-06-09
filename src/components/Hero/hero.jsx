import React from 'react';
import './hero.css';
import hand_icon from '../assets/hand-icon.png';
import arrow_icon from '../assets/arrow-icon.png';
import Hero_img from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>NEW</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>Collection</p>
        <p>For Everyone</p>

        {/* ✅ Move the button here */}
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={Hero_img} alt="Hero Model" />
      </div>
    </div>
  );
};

export default Hero;
