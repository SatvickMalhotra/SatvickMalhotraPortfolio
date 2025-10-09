import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
            {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--text-muted-color)] hover:text-white transition-colors duration-300 group relative flex items-center h-12">
                    <link.icon className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--primary-color)] rounded-full
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    shadow-[0_0_10px_3px] shadow-[var(--primary-color)]/80"></div>
                </a>
            ))}
        </div>
      <p className="text-[var(--text-muted-color)]/80 text-sm">
        &copy; {new Date().getFullYear()} Satvick Malhotra. Designed and built with futuristic vision.
      </p>
    </footer>
  );
};