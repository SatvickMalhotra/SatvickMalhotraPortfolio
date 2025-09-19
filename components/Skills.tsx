import React from 'react';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">{children}</h2>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
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
      `}</style>
      <SectionTitle>Tools & Skills</SectionTitle>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-12">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center p-4 aspect-square
                       bg-gray-900/50 rounded-2xl border border-gray-700/50
                       backdrop-blur-sm
                       transition-all duration-300 ease-in-out
                       hover:bg-gray-800/60 hover:border-cyan-400/50 hover:scale-105"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, transparent 70%)',
                   filter: 'blur(10px)'
                 }}>
            </div>
            <skill.icon className="h-12 w-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] wiggle-on-hover" />
            <span className="absolute bottom-4 text-sm opacity-0 group-hover:opacity-100 
                             transition-all duration-300 text-gray-200 font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};