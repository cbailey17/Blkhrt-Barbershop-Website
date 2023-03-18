import ReactGA from 'react-ga';
const TRACKING_ID = 'G-R5QH8VEY0E';
ReactGA.initialize(TRACKING_ID);

import React from 'react';
import './App.css';
import { images } from './constants.js';

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Footer, Map, Header, Services } from './containers';
import { Navbar, Booking, Carousel } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Booking />
          <Navbar />
          <Header />
          <Link to="#haircuts" smooth>
            <Carousel images={images} />
          </Link>
          <Link to="#services" smooth>
            <Services />
          </Link>
          <Link to="#findus" smooth>
            <Map />
          </Link>
        </div>
        <Link to="#socialmedia" smooth>
          <Footer />
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default App;
