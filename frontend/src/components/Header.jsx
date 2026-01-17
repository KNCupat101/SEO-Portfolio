import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl font-semibold text-gray-900">
            Kenneth Cupat
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Let's Connect
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Let's Connect
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
