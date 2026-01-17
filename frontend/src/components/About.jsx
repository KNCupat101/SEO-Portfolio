import React from 'react';
import { aboutData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Who I Am
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutData.title}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="transform transition-all hover:translate-x-1">{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-900 font-semibold text-lg">
                If you'd like to learn more or need SEO support, let's connect.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src={aboutData.image}
                  alt="Kenneth Noel Cupat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full -z-10 opacity-50 group-hover:scale-125 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
