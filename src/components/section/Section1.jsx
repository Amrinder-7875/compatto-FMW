import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Section1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
    </div>
  );
};

export default Section1;
