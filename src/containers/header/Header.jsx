import React from 'react';
import './header.css';
import { BsArrowDownCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { openBooksy } from '../../hooks/openBooksy';

const Header = () => (
  <div className="hero-image gpt3__header section__padding overflow-hidden" id="home">
    <div className="hero-text">
      <h1 className="text-white text-5xl lg:text-7xl">BLKHRT Barbershop</h1>
      <p className="text-white text-lg lg:text-2xl pt-5">
        Check Out The Shop
        <motion.span transition={{ type: 'spring', delay: 0.5 }} whileHover={{ scale: 1.6 }}>
          <a href="#haircuts">
            <BsArrowDownCircle
              className="pl-5 w-70 grow inline hover:scale-[1.3] ease-out duration-300"
              color="#fff"
              size={44}
              id="arrow"
            />
          </a>
        </motion.span>
      </p>
      <button
        style={{ background: 'var(--gradient-button)' }}
        onClick={openBooksy}
        type="button"
        className="book z-10 text-white rounded-md w-24 py-0.5 mt-16 hover:scale-[1.3] ease-out duration-300">
        Book Now
      </button>
    </div>
  </div>
);

export default Header;
