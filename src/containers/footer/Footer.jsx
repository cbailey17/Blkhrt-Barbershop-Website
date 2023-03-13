import React from 'react';
import yelp from '../../assets/yelp.svg';
import instag from '../../assets/instag.png';

import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <a href="https://www.yelp.com/biz/blkhrt-barbershop-san-diego">
            <img id="copyright" src={yelp} />
          </a>
          <a href="https://www.instagram.com/blkhrt/">
            <img id="copyright" src={instag} />
          </a>
        </div>
        <h3 id="copy">Copyright &copy; 2010 BLKHRT - All Rights Reserved.</h3>
      </footer>
    </div>
  );
};

export default Footer;
