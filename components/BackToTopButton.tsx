import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from './icons/Icons';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-500/50 backdrop-blur-sm
                  text-white shadow-lg shadow-cyan-500/30
                  transition-all duration-300 ease-in-out
                  hover:bg-cyan-500/80 hover:scale-110 hover:shadow-cyan-400/50
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Go to top"
      title="Go to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};
