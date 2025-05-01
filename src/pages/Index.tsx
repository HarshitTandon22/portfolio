
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Main content */}
      <main className="w-full">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary rounded-full text-primary-foreground shadow-lg z-40"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default Index;
