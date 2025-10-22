import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <WhatIDo />
      <Skills />
    </div>
  );
}

export default App;
