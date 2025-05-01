
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Harshit Tandon</p>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Harshit Tandon. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            <span className="hidden" id="easter-egg">
              Thanks for exploring my portfolio! 🚀
            </span>
            <button
              onClick={() => {
                const easterEgg = document.getElementById('easter-egg');
                if (easterEgg) {
                  easterEgg.classList.toggle('hidden');
                }
                console.log('%c✨ Hello, curious developer! ✨', 'font-size: 20px; font-weight: bold; color: #8B5CF6;');
                console.log('%cFeel free to reach out for collaboration opportunities!', 'font-size: 14px;');
              }}
              className="text-primary hover:underline cursor-help focus:outline-none"
            >
              Designed and built with ❤️
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
