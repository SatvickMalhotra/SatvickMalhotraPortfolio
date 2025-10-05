import React, { useState, useEffect } from 'react';

interface FloatingLogoProps {
  isVisible: boolean;
}

export const FloatingLogo: React.FC<FloatingLogoProps> = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      // Hide cursor if we go from desktop to mobile
      setPosition({ x: -100, y: -100 });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <img
      src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Generated%20Image%20September%2008%2C%202025%20-%205_25PM.png"
      alt="Floating profile logo"
      className={`fixed z-50 w-16 h-16 rounded-full object-cover border-2 border-[var(--primary-color)] pointer-events-none
                 shadow-lg shadow-[var(--primary-color)]/40
                 transition-opacity duration-300 ease-in-out`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};