import React from 'react';
import './App.css';
import { images } from './constants.js';

import { Footer, Map, Header } from './containers';
import { Navbar, Booking, Carousel } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Booking />
        <Navbar />
        <Header />
        <Carousel images={images} />
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default App;
