import React from 'react';
import './header.css';
import { BsArrowDownCircle } from 'react-icons/bs';

const Header = () => (
  <div className="hero-image gpt3__header section__padding" id="home">
    <div className="hero-text">
      <h1 className="text-white">BLKHRT Barbershop</h1>
      <p className="text-white">Check Out The Shop</p>
      <BsArrowDownCircle color="#fff" size={44} id="arrow" />
    </div>
  </div>
);

export default Header;
