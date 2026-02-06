import React from 'react';

const Section5 = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-stone-50">
      {/* Scrolling Text Banner */}
     
      {/* CTA Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-stone-800/70 to-stone-900/80"></div>
            
            {/* Decorative blur circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-600/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                Elevate Your Space with Compatto
              </h2>
              
              <p className="text-stone-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Whether you are dreaming of a grand lobby that welcomes guests with opulence, 
                a serene bedroom that embodies relaxation, or a sleek, sophisticated office that 
                inspires productivity, Compatto is here to bring your vision to life. Contact us 
                today to see how we can help you achieve your goals.
              </p>

              <button className="group px-8 py-4 bg-white text-stone-800 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                <span>Transform Your Space</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="px-6 py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-light text-stone-800 mb-1">
                  C<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-xs mx-1">⊙</span>mpatto
                </h3>
                <p className="text-xs text-stone-500 tracking-wider">FURNISHING MADE SIMPLE</p>
              </div>
              
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Stay inspired with Compatto
              </p>

              {/* Newsletter Signup */}
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all"
                />
                <button className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-stone-500 mt-3">
                By subscribing you agree to with our{' '}
                <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a>
              </p>
            </div>

            {/* Menu Links */}
            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm">Menu</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Our process
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Why choose us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors text-sm">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-stone-800 mb-4 text-sm">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Quantum 71, 10524, Athens, Greece</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+30 210 889 8828</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@compatto.gr</span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-6 flex gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-stone-200 hover:bg-amber-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 text-stone-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-stone-200 hover:bg-amber-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 text-stone-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-stone-200 hover:bg-amber-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 text-stone-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-500">
              © 2025 Compatto. All rights reserved
            </p>
            <p className="text-xs text-stone-500">
              Created by{' '}
              <a href="#" className="text-amber-600 hover:underline">
                LeadWise.gr
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
};


export default Section5;