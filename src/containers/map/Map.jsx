/* eslint-disable prettier/prettier */
import React from 'react';
import airplane from '../../assets/airplane.png';
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
          <button href="https://maps.google.com/?q=BLKHRT" id="directions">
            <img id="mapButton" src={airplane} />
            <p>DIRECTIONS</p>
          </button>
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
        <div>Come Find Us</div>
        <p>1952 Balboa Ave, San Diego, CA 92109</p>
        <div>
          <h1>HOURS</h1>
          <h4>TUE - FRI: 11AM - 7PM</h4>
          <h4>SAT: 11AM - 4PM</h4>
          <h4>SUN - MON: CLOSED</h4>
        </div>
      </div>
    </div>
  );
};

export default Map;
