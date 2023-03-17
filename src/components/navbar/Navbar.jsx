import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
// import logo from '../../assets/logo.png';
import logoBw from '../../assets/BudweiserBLKHRT.png';
import { useState } from 'react';
import { openBooksy } from '../../hooks/openBooksy';

const Menu = () => (
  <>
    <p className="hover:scale-[1.2] ease-out duration-300">
      <a href="#about">About</a>
    </p>
    <p className="hover:scale-[1.2] ease-out duration-300">
      <a href="#wgpt3">Shop Photos</a>
    </p>
    <p className="hover:scale-[1.2] ease-out duration-300">
      <a href="#possibility">Services</a>
    </p>
    <p className="hover:scale-[1.2] ease-out duration-300">
      <a href="#features">Find Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logoBw} id="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="https://maps.google.com/?q=BLKHRT">
          <p className="hover:scale-[1.2] ease-out duration-300">Directions</p>
        </a>
        <button
          id="button"
          onClick={openBooksy}
          type="button"
          className="bg-black-900 text-black hover:scale-[1.2] ease-out duration-300">
          Book Now
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <a href="https://maps.google.com/?q=BLKHRT">
                  <p>Directions</p>
                </a>
                <button id="button" onClick={openBooksy} type="button" className="text-red">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
