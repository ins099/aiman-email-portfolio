import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <WhatIDo />
    </div>
  );
}

export default App;
