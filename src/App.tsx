import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageCarousel />
    </div>
  );
}

export default App;
