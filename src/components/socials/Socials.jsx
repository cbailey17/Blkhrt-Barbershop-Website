import React from 'react';
import yelp from '../../assets/yelp.svg';
import instagram from '../../assets/instag.png';

const Socials = () => {
  return (
    <div className="flex self-center py-10">
      <a href="https://www.yelp.com/biz/blkhrt-barbershop-san-diego">
        <img className="px-4" id="copyright" src={yelp} />
      </a>
      <a href="https://www.instagram.com/blkhrt/">
        <img className="px-4" id="copyright" src={instagram} />
      </a>
    </div>
  );
};

export default Socials;
