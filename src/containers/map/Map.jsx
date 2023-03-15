/* eslint-disable prettier/prettier */
import React from 'react';
// import airplane from '../../assets/airplane.png';
import './map.css';

const Gmap = () => {
  return (
    <div>
      <div id="map">
        <iframe
          className="map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBpvPj658khiER_se2HT21-QoDcuayH4UQ&q=BLKHRT"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <a href="https://maps.google.com/?q=BLKHRT">
          {/* <button href="https://maps.google.com/?q=BLKHRT" id="directions">
            <img id="mapButton" src={airplane} />
            <p>DIRECTIONS</p>
          </button> */}
        </a>
      </div>
      <div>
        <h1 id="mapDetails">Grand Avenue</h1>
      </div>
    </div>
  );
};

export const Map = () => {
  return (
    <div id="find-us">
      <Gmap></Gmap>
      <div id="contact">
        <div className="text-yellow-400 font-bold text-xl center text-center p-2">Come Find Us</div>
        <p className="text-white text-center">1952 Balboa Ave, San Diego, CA 92109</p>
        <div className="text-white text-center relative top-6">
          <h1 className="font-bold text-yellow-400">HOURS</h1>
          <h4>TUE - FRI: 11AM - 7PM</h4>
          <h4>SAT: 11AM - 4PM</h4>
          <h4>SUN - MON: CLOSED</h4>
        </div>
      </div>
    </div>
  );
};

export default Map;
