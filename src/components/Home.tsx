import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ImageCarousel from './ImageCarousel';
import WhatIDo from './WhatIDo';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageCarousel />
      <WhatIDo />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
