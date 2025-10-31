import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon } from './icons/Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">{children}</h2>
);

export const Projects: React.FC = () => {
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
    <section id="projects" className="py-20" ref={sectionRef}>
      <style>{`
        .project-card {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .project-card.is-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        @media (max-width: 767px) {
          .project-card {
            transform: scale(0.95) translateY(10px);
          }
        }
      `}</style>
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} 
               className={`flex flex-col bg-[var(--card-background-color)] backdrop-blur-sm border border-[var(--border-color)] rounded-2xl 
                          overflow-hidden transition-all duration-300 hover:border-[var(--primary-color)]/50 hover:scale-105
                          shadow-lg hover:shadow-[var(--primary-color)]/20 project-card ${isVisible ? 'is-visible' : ''}`}
               style={{ transitionDelay: `${index * 100}ms` }}
            >
            <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 flex gap-3">
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
                         className="bg-black/50 p-2 rounded-full text-[var(--text-muted-color)] hover:text-white hover:bg-black/80 transition-colors">
                        <GithubIcon className="w-6 h-6 text-2xl" />
                      </a>
                    )}
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">{project.title}</h3>
              <p className="text-sm text-[var(--text-muted-color)] mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-full font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="https://github.com/SatvickMalhotra/full-stack-apps-with-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-lg
                     bg-[var(--card-background-color)]/80 border-2 border-[var(--primary-color)]/50 text-[var(--primary-color)] rounded-lg
                     backdrop-blur-sm transition-all duration-300 ease-in-out
                     hover:bg-[var(--primary-color)]/20 hover:text-white hover:border-[var(--primary-color)]
                     hover:shadow-lg hover:shadow-[var(--primary-color)]/30 transform hover:-translate-y-1"
        >
          <i className="devicon-github-original text-2xl text-white"></i>
          <span>Explore More Projects</span>
        </a>
      </div>
    </section>
  );
};