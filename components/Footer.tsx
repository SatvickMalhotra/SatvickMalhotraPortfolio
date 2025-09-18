import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
            {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-all duration-300 group relative">
                    <link.icon className="w-8 h-8" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    shadow-[0_0_10px_3px] shadow-cyan-400/80"></div>
                </a>
            ))}
        </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Satvick Malhotra. Designed and built with futuristic vision.
      </p>
    </footer>
  );
};