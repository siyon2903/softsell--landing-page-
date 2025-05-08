import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-yellow-500 shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-yellow-600'}`}>SoftSell</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`font-medium hover:text-white transition-colors ${
                isScrolled ? 'text-white' : 'text-gray-700'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className={`font-medium hover:text-white transition-colors ${
                isScrolled ? 'text-white' : 'text-gray-700'
              }`}
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium hover:text-white transition-colors ${
                isScrolled ? 'text-white' : 'text-gray-700'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${isScrolled ? 'bg-white text-yellow-600 hover:bg-gray-100' : 'bg-yellow-600 text-white hover:bg-yellow-700'} px-6 py-2 rounded-lg transition-colors font-medium`}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-white' : 'text-gray-700'} focus:outline-none`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="font-medium text-gray-700 hover:text-yellow-600 transition-colors py-2"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')}
            className="font-medium text-gray-700 hover:text-yellow-600 transition-colors py-2"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-medium text-gray-700 hover:text-yellow-600 transition-colors py-2"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium text-center"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed right-6 bottom-6 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-all z-50 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Header;