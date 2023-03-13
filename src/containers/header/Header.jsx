/* eslint-disable prettier/prettier */
import React from 'react';
import './header.css';
// import people from '../../assets/people.png';
// import earth from '../../assets/earth.png';
// import mountain from '../../assets/mountain.png';
import { BsArrowDownCircle } from 'react-icons/bs';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">BLKHRT Barbershop</h1>
      <p>
        We are building a global mesh network of Carbon Capture facilities,
        using the most effective and efficient solutions engineered for any
        climate anywhere.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <p>Check Out The Shop</p>
        <BsArrowDownCircle color="#fff" size={44} id="arrow" />
      </div>
    </div>

    <div className="gpt3__header-image">{/* <img src={bhrt} /> */}</div>
  </div>
);

export default Header;
