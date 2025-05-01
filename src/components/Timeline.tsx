
import { Calendar, Briefcase, Laptop, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Timeline = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const timelineItems = [
    {
      date: "2022 - Present",
      title: "Senior Full Stack Developer",
      description: "Leading development of web applications using React, Node.js, and MongoDB. Implementing microservices architecture and CI/CD pipelines.",
      icon: <Briefcase size={20} />,
      isLeft: false,
      color: "bg-blue-500"
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      description: "Built RESTful APIs with Express.js, designed database schemas, and developed responsive front-end interfaces with React and Redux.",
      icon: <Laptop size={20} />,
      isLeft: true,
      color: "bg-purple-500"
    },
    {
      date: "2018 - 2020",
      title: "Frontend Developer",
      description: "Created interactive user interfaces with JavaScript, React, and CSS. Collaborated on UI/UX improvements and implemented design systems.",
      icon: <Code size={20} />,
      isLeft: false,
      color: "bg-green-500"
    },
    {
      date: "2014 - 2018",
      title: "Computer Science Degree",
      description: "Graduated with honors in Computer Science, focusing on web development and database management systems.",
      icon: <GraduationCap size={20} />,
      isLeft: true,
      color: "bg-amber-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="timeline" className="section-container relative py-16 md:py-24" ref={elementRef as React.RefObject<HTMLDivElement>}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <motion.div 
          className="absolute top-1/4 right-5 md:right-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-5 md:left-20 w-48 md:w-80 h-48 md:h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Additional background decorations */}
        <div className="absolute top-1/2 left-1/3 w-6 h-6 rounded-full bg-blue-500/10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-500/10"></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-green-500/10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full bg-amber-500/10"></div>
      </div>

      <div className="content-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            My Journey
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="section-description">
            A timeline of my professional experience and education in full stack development.
          </p>
        </motion.div>

        <motion.div 
          className="timeline-container relative"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {/* Timeline vertical line with animated gradient */}
          <div 
            className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 z-10"
            style={{ height: `${timelineItems.length * 250}px` }}
          >
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-80"></div>
            <motion.div 
              className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-30"
              animate={{ 
                y: ["0%", "100%"], 
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Timeline items */}
          <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 relative z-20">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
                icon={item.icon}
                color={item.color}
                index={index}
              />
            ))}
          </div>
          
          {/* Decorative end point */}
          <motion.div 
            className="absolute bottom-0 left-[19px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-green-500 z-20"
            initial={{ scale: 0 }}
            animate={isIntersecting ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
