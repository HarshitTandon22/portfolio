
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  // Console easter egg
  useEffect(() => {
    console.log('%c👋 Welcome to my Portfolio!', 'font-size: 24px; font-weight: bold; color: #8B5CF6;');
    console.log('%cFeel free to explore the code. This site was built with React, TypeScript, and Tailwind CSS.', 'font-size: 14px;');
    console.log('%cLet\'s connect! 🚀', 'font-size: 16px; font-weight: bold;');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Main content */}
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
