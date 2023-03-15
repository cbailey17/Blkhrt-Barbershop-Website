import React from 'react';
import { BsScissors } from 'react-icons/bs';
import { GiBeard } from 'react-icons/gi';

const ServicesOptions = () => (
  <>
    <p className="text-white">Haircut</p>
    <BsScissors></BsScissors>
    <p className="text-white">Beard Trim (with cut)</p>
    <GiBeard></GiBeard>
    <p className="text-white">Skin Fade</p>
    <p className="text-white">Life Advice</p>
  </>
);

const Services = () => (
  <div>
    <h1 className="text-white">Our Services</h1>
    <ServicesOptions></ServicesOptions>
  </div>
);

export default Services;
