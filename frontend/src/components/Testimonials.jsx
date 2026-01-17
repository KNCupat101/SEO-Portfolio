import React from 'react';
import { testimonialsData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What clients say about working with Kenneth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.slice(0, 4).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 transform hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={80} className="text-blue-600" />
                </div>
                <div className="mb-4 relative z-10">
                  <Quote className="text-blue-600 mb-4" size={32} />
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
