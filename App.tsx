import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import AnimatedBackground from './components/AnimatedBackground';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--background-color)] text-[var(--text-color)] font-sans antialiased overflow-x-hidden transition-colors duration-500">
        <AnimatedBackground />
        <main className="relative z-10 container mx-auto px-6 md:px-12">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
        <ThemeSwitcher />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
