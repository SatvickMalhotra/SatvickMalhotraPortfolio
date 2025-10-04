import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-16 text-[var(--text-color)]">{children}</h2>
);

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <style>{`
        .experience-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .experience-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <SectionTitle>Career Journey</SectionTitle>
      <div className="relative max-w-3xl mx-auto px-4 md:px-0">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[var(--primary-color)]/50 to-transparent md:left-1/2 md:-translate-x-1/2"></div>
        
        {EXPERIENCES.map((item, index) => (
          <div 
            key={index} 
            className={`relative mb-12 md:flex md:items-center md:justify-between w-full experience-item ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            
            {/* Desktop-only Date Div */}
            <div className={`hidden md:block order-1 md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <p className="text-lg font-semibold text-[var(--primary-color)]">{item.period}</p>
            </div>
            
            {/* Timeline Dot */}
            <div className="absolute left-4 -translate-x-1/2 top-1 md:relative md:left-auto md:translate-x-0 md:top-auto z-20 flex items-center order-1 bg-[var(--card-background-color)] shadow-xl w-8 h-8 rounded-full">
               <div className="mx-auto w-4 h-4 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
            </div>

            {/* Content Card Div */}
            <div className={`w-full pl-10 text-left md:pl-0 order-1 md:w-5/12 md:px-6 md:py-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <div className="p-6 bg-[var(--card-background-color)] backdrop-blur-md rounded-2xl border border-[var(--border-color)]
                              hover:border-[var(--secondary-color)]/50 transition-colors duration-300
                              shadow-lg shadow-black/20">
                {/* Mobile-only Date */}
                <p className="md:hidden text-lg font-semibold text-[var(--primary-color)] mb-2">{item.period}</p>
                
                <h3 className="mb-2 text-xl font-bold text-[var(--secondary-color)]">{item.role}</h3>
                <h4 className="mb-3 font-semibold text-[var(--text-muted-color)]">{item.company}</h4>
                <p className="text-sm leading-snug tracking-wide text-[var(--text-muted-color)]">
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