import React from 'react';
import './map.css';
import { RiNavigationFill } from 'react-icons/ri';
import { Find } from '../../components/';
// sm:left-[280px] md:left-[280px]

const Gmap = () => {
  return (
    <div>
      <div id="map" className="relative w-full sm:w-full md:w-full">
        <div id="find-button" className="z-50 hover:scale-[1.2] ease-in duration-300 relative">
          <a href="https://maps.google.com/?q=BLKHRT">
            <button
              id="directions"
              className="flex rounded-lg p-1 bg-black absolute top-[15px] right-[15px]">
              <RiNavigationFill color="white" className="" id="mapButton"></RiNavigationFill>
              <p id="direction" className="pl-4 self-center text-white">
                DIRECTIONS
              </p>
            </button>
          </a>
        </div>
        <iframe
          title="googlemap"
          className="map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBpvPj658khiER_se2HT21-QoDcuayH4UQ&q=BLKHRT"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export const Map = () => {
  return (
    <div
      id="findus"
      className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row md:justify-start lg:justify-evenly xl:justify-evenly">
      <Gmap />
      <Find />
    </div>
  );
};

export default Map;
