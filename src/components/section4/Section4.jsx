import React from 'react';

const Section4= () => {
  const features = [
    {
      title: "End-to-End Solutions",
      description: "We manage every aspect of your furnishing project, saving you time and resources.",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=800&auto=format&fit=crop",
      size: "small",
      position: "top-left"
    },
    {
      title: "After-Sales Support",
      description: "We are committed to providing ongoing support & after-sales service to address any future needs or concerns.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      size: "small",
      position: "top-middle"
    },
    {
      title: "No Variety Restrictions",
      description: "We partner with any vendor meeting our quality standards, providing the broadest selection of furniture solutions to suit your needs and preferences.",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=800&auto=format&fit=crop",
      size: "medium",
      position: "top-right",
      theme: "dark"
    },
    {
      title: "Superior Quality",
      description: "Our partnerships with the best suppliers grant us access to top-tier products, enhancing quality control processes.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
      size: "large",
      position: "bottom-left"
    },
    {
      title: "Bespoke Furniture",
      description: "We specialize in sourcing custom-made furniture pieces that perfectly match your unique vision and requirements.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
      size: "medium",
      position: "bottom-right",
      theme: "dark"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-stone-50 to-white py-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10L70 40L100 50L70 60L60 90L50 60L20 50L50 40L60 10Z" fill="#D4A574"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 mb-4">
            Why <span className="text-amber-600 font-normal">Choose</span> Compatto
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          {/* Top Row */}
          <div className="lg:col-span-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              image={features[0].image}
              height="h-80"
            />
          </div>
          
          <div className="lg:col-span-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              image={features[1].image}
              height="h-80"
            />
          </div>

          <div className="lg:col-span-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              image={features[2].image}
              height="h-80"
              theme="dark"
            />
          </div>

          {/* Bottom Row */}
          <div className="lg:col-span-7 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              image={features[3].image}
              height="h-96"
              featured
            />
          </div>

          <div className="lg:col-span-5 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <FeatureCard
              title={features[4].title}
              description={features[4].description}
              image={features[4].image}
              height="h-96"
              theme="dark"
            />
          </div>
        </div>

        {/* Scrolling Text Banner */}
        <div className="relative overflow-hidden py-8 border-y border-stone-200">
          <div className="flex animate-scroll whitespace-nowrap">
            <ScrollingText />
            <ScrollingText />
            <ScrollingText />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const FeatureCard = ({ title, description, image, height = "h-80", theme = "light", featured = false }) => {
  const isDark = theme === "dark";
  
  return (
    <div className={`group relative ${height} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-amber-900/80 via-stone-900/70 to-stone-800/90' 
            : 'bg-gradient-to-br from-white/90 via-stone-50/85 to-amber-50/80'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        {/* Decorative Icon */}
        {featured && (
          <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-60">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <div>
          <h3 className={`text-2xl md:text-3xl font-semibold mb-3 ${
            isDark ? 'text-white' : 'text-stone-800'
          } leading-tight`}>
            {title}
          </h3>
          <p className={`text-sm md:text-base leading-relaxed ${
            isDark ? 'text-stone-200' : 'text-stone-600'
          }`}>
            {description}
          </p>
        </div>

        {/* Hover Indicator */}
        <div className={`mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark ? 'text-amber-300' : 'text-amber-600'
        }`}>
          <span className="text-sm font-medium">Learn more</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Corner Accent */}
      <div className={`absolute bottom-0 right-0 w-24 h-24 ${
        isDark ? 'bg-amber-500/10' : 'bg-amber-600/5'
      } rounded-tl-full`}></div>
    </div>
  );
};

const ScrollingText = () => (
  <div className="flex items-center gap-8 px-8">
    <span className="text-6xl font-light text-stone-200">Furnishing Made Simple.</span>
    <svg className="w-12 h-12 text-amber-600/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
    <span className="text-6xl font-light text-stone-200">Furnishing Made Simple.</span>
    <svg className="w-12 h-12 text-amber-600/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  </div>
);

export default Section4;