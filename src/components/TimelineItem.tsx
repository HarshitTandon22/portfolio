
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLeft?: boolean;
  icon?: ReactNode;
  color?: string;
  index?: number;
}

const TimelineItem = ({
  date,
  title,
  description,
  isLeft = false,
  icon,
  color = "bg-primary",
  index = 0
}: TimelineItemProps) => {
  // Animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: isLeft ? -50 : 50
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1 + 0.3
      }
    }
  };

  return (
    <div 
      className={`relative mb-16 md:mb-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}
    >
      {/* Date display - visible on mobile and desktop differently */}
      <motion.div 
        className="flex items-center mb-2 md:mb-0"
        variants={itemVariants}
      >
        <div className="md:hidden mr-8 ml-2 text-sm font-semibold text-primary">
          {date}
        </div>
        <div 
          className={`hidden md:block ${isLeft ? 'ml-auto mr-8' : 'ml-8'} text-sm font-semibold text-primary`}
        >
          {date}
        </div>
      </motion.div>
      
      {/* Timeline dot */}
      <motion.div 
        className={`absolute z-20 ${isLeft ? 'md:right-[-36px]' : 'md:left-[-36px]'} top-0 md:top-1/2 md:transform md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full ${color} shadow-lg`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: index * 0.2 + 0.5
        }}
      >
        <div className="text-white">
          {icon}
        </div>
      </motion.div>
      
      {/* Mobile dot - always visible on the left */}
      <div className="absolute md:hidden left-[19px] top-0 w-5 h-5 rounded-full bg-timeline-dot border-4 border-background z-10"></div>
      
      {/* Content card */}
      <motion.div 
        className={`ml-12 md:ml-0 md:w-[90%] p-6 rounded-lg shadow-lg ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
        style={{ 
          background: 'linear-gradient(to bottom right, var(--card), var(--card))', 
          borderLeft: `4px solid var(--${color.replace('bg-', '')})` 
        }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
