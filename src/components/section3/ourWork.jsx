import React from 'react';

const ourWork = () => {
  return (
    <section className="relative  bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className=" animate-slide-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 mb-4 tracking-tight">
            How We <span className="font-serif italic text-amber-700">Simplify</span> Your
            <br />
            <span className="font-semibold">Furnishing Experience</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Process Steps */}
          <div className="space-y-8 animate-slide-in-left">
            {[
              {
                number: "1",
                title: "Consultation & Planning",
                description: "We begin with understanding your vision, space requirements, and budget to create a tailored furnishing plan."
              },
              {
                number: "2",
                title: "Design & Selection",
                description: "Our experts help you choose from our vast network of 150+ suppliers, ensuring perfect matches for your aesthetic."
              },
              {
                number: "3",
                title: "Seamless Installation",
                description: "Professional delivery and installation teams ensure everything is placed perfectly and ready for use."
              },
              {
                number: "4",
                title: "After-Sales Support",
                description: "Our commitment extends beyond installation with comprehensive maintenance, warranty support, and care instructions."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="group flex gap-6 p-6 rounded-xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-amber-200/50 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Feature Card */}
          <div className="lg:sticky lg:top-8 animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                  alt="Luxury hotel lobby with elegant furnishings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Watermark */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium">iStock</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  After-Sales <span className="text-amber-300">Support</span>
                  <br />
                  and <span className="text-amber-300">Maintenance</span>
                </h3>
                <p className="text-sm leading-relaxed text-white/90 mb-6">
                  Our commitment to your satisfaction extends beyond the final installation. We conduct a thorough 
                  final walkthrough to ensure your satisfaction, and also offer comprehensive after-sales support 
                  for warranty claims, maintenance, and care instructions.
                </p>
                
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg font-medium transition-colors duration-300 border border-white/30">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ourWork;