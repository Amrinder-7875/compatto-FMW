import React from 'react';
import Numbers from './Numbers';
import WhoWeAre from './WhoWeAre';

const Section2 = () => {
  return (
    <section className="relative bg-gradient-to-b from-stone-50 via-white to-stone-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Content */}
      <Numbers />
      <WhoWeAre />
    </section>
  );
};

export default Section2;
