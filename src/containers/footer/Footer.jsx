/* eslint-disable no-undef */
import React from 'react';
import './footer.css';

import { FaYelp } from 'react-icons/fa';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';
import { RiNavigationFill } from 'react-icons/ri';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div id="socialmedia">
      <footer className="w-full bg-slate-800 flex flex-col">
        <div id="socials" className="flex self-center py-10">
          <Link href="https://www.facebook.com/blkhrtbarbershop/">
            <RiFacebookCircleFill color="white" className="mx-2" />
          </Link>
          <Link href="https://www.instagram.com/blkhrt/">
            <RiInstagramFill color="white" className="mx-2" />
          </Link>
          <Link href="https://maps.google.com/?q=BLKHRT">
            <RiNavigationFill color="white" className="mx-2" />
          </Link>
          <Link href="https://www.yelp.com/biz/blkhrt-barbershop-san-diego">
            <FaYelp color="white" className="mx-2" />
          </Link>
        </div>
        <h3 id="copy" className="text-white text-center pb-8">
          Copyright &copy; 2015 BLKHRT - All Rights Reserved.
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
