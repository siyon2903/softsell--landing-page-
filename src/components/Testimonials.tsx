import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechGrowth Inc.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "SoftSell helped our company recoup over $45,000 from unused Adobe and Microsoft licenses after downsizing. The process was incredibly straightforward, and we received payment within 72 hours of acceptance. I was genuinely surprised by how easy the entire process was.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "CFO",
    company: "Innovate Solutions",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "As a CFO, I'm always looking for ways to optimize our software spend. SoftSell turned what would have been sunk costs into valuable capital that we reinvested in our business. Their valuation was fair and their security protocols gave us confidence throughout the process.",
    rating: 5
  }
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have to say about working with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium text-center mx-auto block mt-12"
          >
            Get Your Valuation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;