import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative px-4 md:px-8 lg:px-20 mt-8 mb-20">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
        {/* Image with overlay */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <img 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
            src="src/assets/hero-image.jpg" 
            alt="Luxury hotel furnishing" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 md:p-12 lg:p-16">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-end transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Left Column - Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                  Bring{' '}
                  <span className="block mt-2 font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                    SIMPLICITY
                  </span>
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                  In The Furnishing Market
                </h2>
              </div>

              {/* Right Column - Description & CTA */}
              <div className="space-y-6 lg:text-right">
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Compatto simplifies the complex process of
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    furnishing all-inclusive & high-end hotels
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    in Greece and Cyprus
                  </p>
                </div>

                <div className="flex justify-start lg:justify-end">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg font-medium rounded-2xl shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Furnishing Journey
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className={`mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <StatItem number="150+" label="Furniture Suppliers" />
              <StatItem number="15+" label="Years of Experience" />
              <StatItem number="500+" label="Projects Completed" />
              <StatItem number="98%" label="Client Satisfaction" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
};

const StatItem = ({ number, label }) => (
  <div className="text-center lg:text-left">
    <div className="text-3xl md:text-4xl font-bold text-white mb-1 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-sm text-white/70 font-light tracking-wide">
      {label}
    </div>
  </div>
);

export default Hero;
