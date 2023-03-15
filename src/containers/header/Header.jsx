import React from 'react';
import './header.css';
import { BsArrowDownCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = () => (
  <div className="hero-image gpt3__header section__padding" id="home">
    <div className="hero-text">
      <h1 className="text-white text-5xl lg:text-7xl">BLKHRT Barbershop</h1>
      <p className="text-white text-lg lg:text-2xl pt-5">
        Check Out The Shop
        <motion.div transition={{ type: 'spring', delay: 0.5 }} whileHover={{ scale: 1.6 }}>
          <BsArrowDownCircle className="pl-5 w-70 grow inline" color="#fff" size={44} id="arrow" />
        </motion.div>
      </p>
      <button type="button" className="book z-10 text-white rounded-md w-24 py-0.5 mt-16">
        Book Now
      </button>
    </div>
  </div>
);

export default Header;
