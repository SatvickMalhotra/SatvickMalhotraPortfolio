import React from 'react';
import { EXPERIENCES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-16 text-gray-100">{children}</h2>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle>Career Journey</SectionTitle>
      <div className="relative max-w-3xl mx-auto px-4 md:px-0">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 md:left-1/2 md:-translate-x-1/2"></div>
        
        {EXPERIENCES.map((item, index) => (
          <div key={index} className="relative mb-12 md:flex md:items-center md:justify-between w-full">
            
            {/* Desktop-only Date Div */}
            <div className={`hidden md:block order-1 md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <p className="text-lg font-semibold text-cyan-300">{item.period}</p>
            </div>
            
            {/* Timeline Dot */}
            <div className="absolute left-4 -translate-x-1/2 top-1 md:relative md:left-auto md:translate-x-0 md:top-auto z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
               <div className="mx-auto w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>

            {/* Content Card Div */}
            <div className={`w-full pl-10 text-left md:pl-0 order-1 md:w-5/12 md:px-6 md:py-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <div className="p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700/50
                              hover:border-purple-500/50 transition-colors duration-300
                              shadow-lg shadow-black/20">
                {/* Mobile-only Date */}
                <p className="md:hidden text-lg font-semibold text-cyan-300 mb-2">{item.period}</p>
                
                <h3 className="mb-2 text-xl font-bold text-purple-300">{item.role}</h3>
                <h4 className="mb-3 font-semibold text-gray-400">{item.company}</h4>
                <p className="text-sm leading-snug tracking-wide text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};