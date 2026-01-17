import React from 'react';
import { aboutData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutData.title}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-blue-600 font-semibold text-lg">
              If you'd like to learn more or need SEO support, let's connect.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutData.image}
                  alt="Kenneth Noel Cupat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
