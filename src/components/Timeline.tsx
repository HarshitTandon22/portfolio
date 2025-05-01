
import { Calendar, Briefcase, Laptop, GraduationCap, Code } from 'lucide-react';
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
      isLeft: false
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      description: "Built RESTful APIs with Express.js, designed database schemas, and developed responsive front-end interfaces with React and Redux.",
      icon: <Laptop size={20} />,
      isLeft: true
    },
    {
      date: "2018 - 2020",
      title: "Frontend Developer",
      description: "Created interactive user interfaces with JavaScript, React, and CSS. Collaborated on UI/UX improvements and implemented design systems.",
      icon: <Code size={20} />,
      isLeft: false
    },
    {
      date: "2014 - 2018",
      title: "Computer Science Degree",
      description: "Graduated with honors in Computer Science, focusing on web development and database management systems.",
      icon: <GraduationCap size={20} />,
      isLeft: true
    }
  ];

  return (
    <section id="timeline" className="section-container relative" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional experience and education in full stack development.
        </p>
      </div>

      <div className="timeline-container">
        {/* Timeline vertical line */}
        <div 
          className={`timeline-line ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ 
            height: `${timelineItems.length * 250}px`,
            transition: 'height 0.8s ease-out'
          }}
        ></div>
        
        {/* Timeline items */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              isLeft={item.isLeft}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
