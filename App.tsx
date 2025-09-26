
import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <main className="relative z-10 container mx-auto px-6 md:px-12">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <BackToTopButton />
    </div>
  );
};

export default App;