import React from 'react';
import underline from '../../assets/svg/underline.svg';
import Avatar from '@mui/material/Avatar';
import woody from '../../assets/woody.jpg';
import anthony from '../../assets/anthony.jpg';

const Find = () => {
  return (
    <div id="find-us" className="flex justify-around">
      <div id="contact" className="flex pl-4">
        <div>
          <div id="header" className="text-navy font-bold text-2xl pt-8">
            Come Find Us
          </div>
          <p className="text-white">1952 Balboa Ave, San Diego, CA 92109</p>
          <div className="relative top-6">
            <h1 id="header" className="text-navy text-2xl font-bold">
              HOURS
            </h1>
            <h4 className="text-white">TUE - FRI: 11AM - 7PM</h4>
            <h4 className="text-white">SAT: 11AM - 4PM</h4>
            <h4 className="text-white">SUN - MON: CLOSED</h4>
          </div>
          <div className="pt-9">
            <img id="under" src={underline}></img>
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
            <h1 id="name" className="text-center text-white pt-4">
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
            <h1 id="name" className="text-center  text-white pt-4">
              Anthony
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
