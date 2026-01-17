import React from 'react';
import { Button } from './ui/button';
import { heroData } from '../mock';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heroData.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            {heroData.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 flex items-center gap-2"
            >
              <Mail size={20} />
              Let's Connect
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 flex items-center gap-2"
            >
              View Experience
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
