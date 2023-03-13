import React from 'react';
import './App.css';

import { Footer, Map, Header } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default App;
