import React, { useState, useEffect, useRef } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Header */}
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-600 font-medium mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-amber-600"></span>
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight mb-6">
                Who{' '}
                <span className="font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  We
                </span>{' '}
                Are
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                At Compatto, we are passionate about transforming spaces through exceptional furniture solutions. 
                With over 15 years of industry experience, we've established ourselves as Greece and Cyprus's 
                premier furniture procurement partner for high-end hospitality projects.
              </p>
              
              <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                Our extensive network of 150+ trusted suppliers allows us to source the perfect pieces for any 
                project, from luxury hotel lobbies to intimate boutique spaces. We handle everything from initial 
                consultation to final installation, ensuring a seamless, stress-free experience for our clients. 
                Our commitment to quality, attention to detail, and customer satisfaction sets us apart in the 
                furnishing industry.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                'End-to-End Solutions',
                'Quality Assured',
                'Expert Team',
                'Timely Delivery'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full text-sm font-medium text-amber-800 hover:shadow-md transition-shadow duration-300"
                  style={{ 
                    animationDelay: `${(index + 3) * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible ? 'fadeIn 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>Learn More About Us</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-800 font-medium rounded-xl shadow-md hover:shadow-lg border-2 border-stone-200 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="src/assets/whoWeAre.jpg" 
                alt="Compatto - Luxury Furniture Solutions" 
                className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-stone-800">Trusted by Leading Hotels</p>
                      <p className="text-sm text-stone-600">Across Greece & Cyprus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Corner Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-amber-400/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;
