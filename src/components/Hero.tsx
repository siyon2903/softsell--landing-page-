import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Turn Unused Software <span className="text-yellow-600">Into Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              SoftSell helps businesses and individuals quickly sell their unused software licenses at competitive rates with a seamless process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-all font-medium text-lg flex items-center justify-center"
              >
                Sell My Licenses
                <ChevronRight size={20} className="ml-1" />
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-yellow-600 border border-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition-all font-medium text-lg"
              >
                How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-bold text-2xl md:text-3xl text-yellow-600">$2.3M+</div>
                    <div className="text-gray-600 text-sm">Paid to Sellers</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-bold text-2xl md:text-3xl text-yellow-600">2800+</div>
                    <div className="text-gray-600 text-sm">Licenses Sold</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-bold text-2xl md:text-3xl text-yellow-600">99%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-bold text-2xl md:text-3xl text-yellow-600">48h</div>
                    <div className="text-gray-600 text-sm">Avg. Turnaround</div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Live marketplace updates</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">Active Now</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-full h-full bg-yellow-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;