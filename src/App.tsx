import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Examples from './components/Examples';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Examples />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default App;