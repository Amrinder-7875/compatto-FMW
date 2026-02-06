import React, { useState, useEffect, useRef } from 'react';

const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ suppliers: 0, years: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    const targetSuppliers = 150;
    const targetYears = 15;
    
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        suppliers: Math.floor(targetSuppliers * progress),
        years: Math.floor(targetYears * progress)
      });

      if (currentStep >= steps) {
        setCounts({ suppliers: targetSuppliers, years: targetYears });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      value: `${counts.suppliers}+`,
      label: 'Furniture Suppliers',
      description: 'Trusted partners across Greece and Cyprus',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      value: `${counts.years}+`,
      label: 'Years of Industry Experience',
      description: 'Delivering excellence since inception',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: 'from-amber-600 to-yellow-500'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="px-4 md:px-8 lg:px-20 -mt-16 relative z-20"
    >
      <div className="max-w-6xl mt-15 mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-stone-50 to-amber-50/30 px-8 py-6 border-b border-stone-200">
            <p className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-1">
              Our Company
            </p>
            <h3 className="text-2xl font-semibold text-stone-800">
              In Numbers
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-8 md:p-10 transition-all duration-500 hover:bg-gradient-to-br hover:from-amber-50/50 hover:to-transparent ${
                  index === 0 ? 'md:border-r border-stone-200' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className={`text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>

                {/* Label */}
                <h4 className="text-lg md:text-xl font-semibold text-stone-800 mb-2">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-100/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
