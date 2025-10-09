import React, { useRef, useState, useEffect } from 'react';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">{children}</h2>
);

export const Skills: React.FC = () => {
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
    <section id="skills" className="py-20" ref={sectionRef}>
      <style>{`
        @keyframes wiggle {
          0% { transform: translateY(-0.5rem) rotate(0deg); }
          25% { transform: translateY(-0.5rem) rotate(-5deg) translateX(2px); }
          50% { transform: translateY(-0.5rem) rotate(5deg) translateX(-2px); }
          75% { transform: translateY(-0.5rem) rotate(-3deg); }
          100% { transform: translateY(-0.5rem) rotate(0deg); }
        }
        .group:hover .wiggle-on-hover {
          animation: wiggle 0.4s ease-in-out infinite;
        }
        .skill-item {
          opacity: 0;
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        /* Desktop slide-in animation */
        .skill-item.from-left {
          transform: translateX(-80px);
        }
        .skill-item.from-right {
          transform: translateX(80px);
        }
        .skill-item.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Mobile-specific pop-up animation */
        @media (max-width: 767px) {
          /* Override desktop slide-in with a pop-up effect */
          .skill-item.from-left,
          .skill-item.from-right {
            transform: scale(0.7); /* Start smaller */
            opacity: 0;
          }
          .skill-item.is-visible {
            transform: scale(1); /* End at normal size */
            opacity: 1;
          }
        }
      `}</style>
      <SectionTitle>Tools & Skills</SectionTitle>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-6">
        {SKILLS.map((skill, index) => (
          <div
            key={skill.name}
            className={`group relative flex flex-col items-center justify-center p-2 sm:p-4 aspect-square
                       bg-[var(--card-background-color)] rounded-2xl border border-[var(--border-color)]
                       backdrop-blur-sm
                       transition-all duration-300 ease-in-out
                       hover:bg-[var(--card-background-color)]/80 hover:border-[var(--primary-color)]/50 hover:scale-105
                       skill-item ${index % 2 === 0 ? 'from-left' : 'from-right'} ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                 style={{ 
                   background: 'radial-gradient(circle at center, var(--primary-color) 0%, transparent 70%)',
                   filter: 'blur(10px)'
                 }}>
            </div>
            <skill.icon className="h-12 w-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] wiggle-on-hover" />
            <span className="absolute bottom-4 text-sm opacity-0 group-hover:opacity-100 
                             transition-all duration-300 text-[var(--text-color)] font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};