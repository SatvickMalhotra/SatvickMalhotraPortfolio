import React from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon } from './icons/Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">{children}</h2>
);

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} 
               className="flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl 
                          overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:scale-105
                          shadow-lg hover:shadow-cyan-500/20">
            <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 flex gap-3">
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
                         className="bg-black/50 p-2 rounded-full text-gray-300 hover:text-white hover:bg-black/80 transition-colors">
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    )}
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs bg-cyan-900/50 text-cyan-300 rounded-full font-semibold">{tag}</span>
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
                     bg-gray-800/50 border-2 border-cyan-400/50 text-cyan-300 rounded-lg
                     backdrop-blur-sm transition-all duration-300 ease-in-out
                     hover:bg-cyan-400/20 hover:text-white hover:border-cyan-400
                     hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1"
        >
          <i className="devicon-github-original text-2xl text-white"></i>
          <span>Explore More Projects</span>
        </a>
      </div>
    </section>
  );
};