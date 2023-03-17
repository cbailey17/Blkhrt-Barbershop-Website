import React from 'react';
import { BsScissors } from 'react-icons/bs';
import { GiBeard } from 'react-icons/gi';
import { GiRazorBlade } from 'react-icons/gi';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import './services.css';
import { openBooksy } from '../../hooks/openBooksy';

const ServicesOptions = () => {
  return (
    <>
      <div
        onClick={openBooksy}
        id="service-icon"
        className="rounded-xl w-38 h-36 hover:scale-[1.2] ease-out duration-300">
        <p className="text-white">Haircut</p>
        <BsScissors className="mt-4"></BsScissors>
      </div>
      <div
        onClick={openBooksy}
        id="service-icon"
        className="rounded-xl w-38 h-36 hover:scale-[1.2] ease-out duration-300">
        <p className="text-white">Beard Trim</p>
        <GiBeard className="text-center relative left-5 mt-4"></GiBeard>
      </div>
      <div
        onClick={openBooksy}
        id="service-icon"
        className="rounded-xl w-38 h-36 hover:scale-[1.2] ease-out duration-300">
        <p className="text-white">Skin Fade</p>
        <GiRazorBlade className="mt-4 relative left-4" />
      </div>
      <div
        onClick={openBooksy}
        id="service-icon"
        className="rounded-xl w-38 h-36 hover:scale-[1.2] ease-out duration-300">
        <p className="text-white">Life Advice</p>
        <NightlifeIcon className="mt-4" />
      </div>
    </>
  );
};

const Services = () => (
  <div className="services">
    <h1 id="title" className="text-white text-center pb-12 text-5xl">
      Our Services
    </h1>
    <div className="flex justify-around mb-16">
      <ServicesOptions></ServicesOptions>
    </div>
  </div>
);

export default Services;
