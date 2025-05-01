
import { Calendar, Briefcase, Laptop, GraduationCap } from 'lucide-react';
import TimelineItem from './TimelineItem';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Timeline = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const timelineItems = [
    {
      date: "2023 - Present",
      title: "Senior Frontend Developer",
      description: "Leading a team to develop modern, responsive web applications using React, TypeScript and Next.js.",
      icon: <Briefcase size={20} />,
      isLeft: false
    },
    {
      date: "2021 - 2023",
      title: "Frontend Developer",
      description: "Built interactive user interfaces and implemented responsive designs for various client projects.",
      icon: <Laptop size={20} />,
      isLeft: true
    },
    {
      date: "2019 - 2021",
      title: "Junior Web Developer",
      description: "Developed and maintained websites, collaborated on UI/UX improvements and learned modern web technologies.",
      icon: <Calendar size={20} />,
      isLeft: false
    },
    {
      date: "2015 - 2019",
      title: "Computer Science Degree",
      description: "Graduated with honors in Computer Science, focusing on web development and user interface design.",
      icon: <GraduationCap size={20} />,
      isLeft: true
    }
  ];

  return (
    <section id="timeline" className="section-container relative" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional experience and education.
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
