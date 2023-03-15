import React from 'react';
import yelp from '../../assets/yelp.svg';
import instag from '../../assets/instag.png';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-slate-800 flex flex-col">
        <div className="flex self-center py-10">
          <a href="https://www.yelp.com/biz/blkhrt-barbershop-san-diego">
            <img className="px-4" id="copyright" src={yelp} />
          </a>
          <a href="https://www.instagram.com/blkhrt/">
            <img className="px-4" id="copyright" src={instag} />
          </a>
        </div>
        <h3 id="copy" className="text-white text-center pb-8">
          Copyright &copy; 2015 BLKHRT - All Rights Reserved.
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
