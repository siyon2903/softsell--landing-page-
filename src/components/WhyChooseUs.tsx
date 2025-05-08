import React from 'react';
import { ShieldCheck, BadgeDollarSign, Clock, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built a trusted platform that prioritizes security, fair pricing, and speed to help you maximize the value of your unused software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reason 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center">
              <ShieldCheck size={28} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              All transactions follow software transfer regulations with secure license verification and transfer protocols.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center">
              <BadgeDollarSign size={28} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Best Market Rates</h3>
            <p className="text-gray-600">
              Our extensive buyer network and market expertise ensures you get up to 70% of the original license value.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center">
              <Clock size={28} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">
              From submission to payment in as little as 48 hours, our streamlined process eliminates unnecessary delays.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center">
              <Users size={28} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Our team of software licensing specialists provides guidance throughout the entire sales process.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-yellow-600 rounded-xl p-8 md:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$2.3M+</div>
              <p className="text-yellow-100">Paid to Sellers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2800+</div>
              <p className="text-yellow-100">Licenses Sold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <p className="text-yellow-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;