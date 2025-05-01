
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  colorClass?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  colorClass = "from-primary to-primary/50",
  index = 0
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br ${colorClass}`}>
        <div className="absolute inset-0 bg-card rounded-xl"></div>
      </div>
      
      {/* Card content */}
      <div className="relative z-10 h-full">
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay with links */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center gap-4 p-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                >
                  <ExternalLink className="h-6 w-6 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-2">
            <h3 className={`text-xl font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
              {title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className={`absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} opacity-10 transition-opacity duration-300 ${
        isHovered ? 'opacity-20' : 'opacity-10'
      }`}></div>
    </motion.div>
  );
};

export default ProjectCard;
