import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons/Icons';
import { BusinessCardModal } from './BusinessCardModal';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Career Journey', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle header background visibility
      setIsScrolled(window.scrollY > 50);

      // Handle active section highlighting
      const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';
      
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const offset = 150; // Makes the link active slightly before the section reaches the top
          if (scrollPosition >= sectionTop - offset) {
            currentSection = section.id;
          }
        }
      };

      // A special check for the top of the page to ensure 'Home' is active
      if (scrollPosition < (document.getElementById('skills')?.offsetTop ?? 500) - 150) {
        currentSection = 'home';
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const NavLink: React.FC<{ href: string; children: React.ReactNode; isMobile?: boolean }> = ({ href, children, isMobile }) => {
    const id = href.substring(1);
    const isActive = activeSection === id;
    
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // Prevent default anchor behavior that causes crash
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
      
      if (isMobile) {
        setIsMenuOpen(false);
      }
    };
    
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
          isActive ? 'text-[var(--primary-color)]' : 'text-[var(--text-muted-color)] hover:text-white'
        } ${isMobile ? 'text-2xl block text-center py-4' : ''}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
        {!isMobile && isActive && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full
                           shadow-[0_0_10px_3px] shadow-[var(--primary-color)]/80"></span>
        )}
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-[var(--card-background-color)]/80 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <button
            type="button"
            onClick={() => setIsCardModalOpen(true)}
            className="text-2xl font-bold text-white transition-opacity duration-300 hover:opacity-80"
            aria-label="Open digital business card"
          >
            SM<span className="text-[var(--primary-color)]">.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map(link => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white z-50 relative"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon className="w-7 h-7 text-2xl" /> : <MenuIcon className="w-7 h-7 text-2xl" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-y-6">
            {NAV_LINKS.map(link => (
              <NavLink key={link.name} href={link.href} isMobile>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      
      {isCardModalOpen && <BusinessCardModal onClose={() => setIsCardModalOpen(false)} />}
    </>
  );
};