import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses quick, secure, and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="mb-5 h-14 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Upload size={32} className="text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Upload License</h3>
            <p className="text-gray-600 text-center">
              Submit your license details through our secure form. We support all major software providers including Adobe, Microsoft, Autodesk, and more.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="mb-5 h-14 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <DollarSign size={32} className="text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Get Valuation</h3>
            <p className="text-gray-600 text-center">
              Receive a competitive market valuation within 24 hours based on current demand and license details, with no obligation to sell.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="mb-5 h-14 flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <CreditCard size={32} className="text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Get Paid</h3>
            <p className="text-gray-600 text-center">
              Accept our offer and receive payment within 48 hours via your preferred method: direct deposit, PayPal, or cryptocurrency.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Most licenses are valued and sold within 48 hours. Our process is designed to be simple, transparent, and fast.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-all font-medium"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;