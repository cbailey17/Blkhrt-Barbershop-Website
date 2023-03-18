import React from 'react';
import underline from '../../assets/svg/underline.svg';
import Avatar from '@mui/material/Avatar';
import woody from '../../assets/woody-min.jpg';
import anthony from '../../assets/anthony-min.jpg';

const Find = () => {
  return (
    <div id="find-us" className="flex">
      <div id="contact" className="flex pl-4 grow">
        <div>
          <div
            id="header"
            className="text-navy font-bold text-2xl pt-0 md:pt-8 lg:pt-8 xl:pt-8 2xl:pt-8">
            Come Find Us
          </div>
          <p className="subtext text-white">1952 Balboa Ave, San Diego, CA 92109</p>
          <div className="relative top-6">
            <h1 id="header" className="text-navy text-2xl font-bold">
              HOURS
            </h1>
            <h4 className="subtext text-white">TUE - FRI: 11AM - 7PM</h4>
            <h4 className="subtext text-white">SAT: 11AM - 4PM</h4>
            <h4 className="subtext text-white">SUN - MON: CLOSED</h4>
          </div>
          <div className="pt-9">
            <img
              alt="underline"
              id="under"
              className=" sm:hidden md:hidden hidden"
              src={underline}></img>
          </div>
        </div>
        <div className="flex self-center grow justify-center">
          <div>
            <Avatar
              id="avatar"
              sx={{ width: 200, height: 200 }}
              className="mx-12 sm:mx-2 md:mx-4"
              alt="Woody Donahue"
              src={woody}></Avatar>
            <h1
              id="name"
              className="text-center text-white pt-4  text-2xl sm:text-2xl md:text-2xl lg-text-4xl xl:text-4xl 2xl:text-4xl">
              Woody
            </h1>
          </div>
          <div>
            <Avatar
              id="avatar"
              sx={{ width: 200, height: 200 }}
              className="mx-12"
              alt="Anthony Something"
              src={anthony}></Avatar>
            <h1
              id="name"
              className="text-center text-white pt-4 text-2xl sm:text-2xl md:text-2xl lg-text-4xl xl:text-4xl 2xl:text-4xl">
              Anthony
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
