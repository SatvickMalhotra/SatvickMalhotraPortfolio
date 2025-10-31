import React, { useRef, useState, useEffect } from 'react';
import { SKILLS } from '../constants';
import type { SkillOrGroup, SkillGroup } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">{children}</h2>
);

// Type guard to check if an item is a SkillGroup
function isSkillGroup(item: SkillOrGroup): item is SkillGroup {
  return (item as SkillGroup).skills !== undefined;
}

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
        .skill-item {
          opacity: 0;
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
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
        
        /* New style for the glowing skill name text */
        .skill-name-glow {
            color: #ffffff;
            font-weight: 500;
            text-shadow: 0 0 6px var(--primary-color);
        }
      `}</style>
      <SectionTitle>Tools & Skills</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {SKILLS.map((item, index) => {
          if (isSkillGroup(item)) {
            // Render Skill Group Card
            return (
              <div
                key={item.name}
                tabIndex={0}
                className={`group relative flex flex-col items-center justify-center p-4 aspect-square
                           bg-[var(--card-background-color)] rounded-2xl border border-[var(--border-color)]
                           backdrop-blur-sm cursor-pointer
                           transition-all duration-300 ease-in-out
                           hover:border-[var(--primary-color)]/50 hover:scale-105 focus:border-[var(--primary-color)]/50 focus:scale-105
                           skill-item ${index % 2 === 0 ? 'from-left' : 'from-right'} ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Main Icon and Title */}
                <div className="flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                  <item.icon className="h-16 w-16 mb-2 text-6xl text-[var(--primary-color)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                  <span className="text-lg font-semibold text-[var(--text-color)]">{item.name}</span>
                </div>

                {/* Sub-skills Overlay */}
                <div className="absolute inset-0 p-4 rounded-2xl 
                                bg-[var(--card-background-color)]/80 backdrop-blur-md
                                opacity-0 pointer-events-none
                                transition-opacity duration-300
                                group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                  <div className="grid grid-cols-3 gap-4 h-full w-full">
                    {item.skills.map(skill => (
                      <div key={skill.name} className="flex flex-col items-center justify-center">
                        <skill.icon className="h-8 w-8 text-3xl" />
                        <span className="mt-3 text-xs text-center skill-name-glow">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          // Fallback for individual skills if any
          return null;
        })}
      </div>
    </section>
  );
};