import React from 'react';
import './App.css';
import { images } from './constants.js';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

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
        <Fab className="fab" variant="extended" size="small" color="primary" aria-label="add">
          <NavigationIcon sx={{ mr: 1 }} />
          BLKHRT
        </Fab>
      </div>
      <Footer />
    </div>
  );
};

export default App;
