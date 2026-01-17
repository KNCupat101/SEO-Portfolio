import React from 'react';
import { experienceData } from '../mock';
import { Briefcase } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            6+ years of driving organic growth and leading SEO teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center shadow-lg z-10">
                  <Briefcase className="text-white" size={20} />
                </div>

                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {experience.period}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
