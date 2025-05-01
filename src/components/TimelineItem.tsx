
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLeft?: boolean;
  icon?: ReactNode;
}

const TimelineItem = ({
  date,
  title,
  description,
  isLeft = false,
  icon
}: TimelineItemProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px',
  });

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative mb-16 md:mb-0 ${isLeft ? 'md:text-right' : ''}`}
    >
      <div 
        className={`hidden md:block absolute top-0 w-6 h-6 rounded-full bg-timeline-dot border-4 border-background z-10
          ${isLeft ? 'right-[-12px]' : 'left-[-12px]'} 
          ${isIntersecting ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      ></div>
      
      {/* Mobile dot - always visible on the left */}
      <div className="absolute md:hidden left-[19px] top-0 w-5 h-5 rounded-full bg-timeline-dot border-4 border-background z-10"></div>
      
      <div className="flex items-center mb-2 md:mb-0">
        <div className="md:hidden mr-8 ml-2 text-sm font-semibold text-primary">
          {date}
        </div>
        <div 
          className={`hidden md:block ${isLeft ? 'ml-auto mr-8' : 'ml-8'} text-sm font-semibold text-primary`}
        >
          {date}
        </div>
      </div>
      
      <div 
        className={`ml-12 md:ml-0 md:w-5/12 p-5 rounded-lg shadow-md bg-timeline-content
          ${isLeft ? 'md:ml-auto' : ''}
          ${isIntersecting ? (isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
      >
        <div className="flex items-center mb-2">
          {icon && <div className="mr-3 text-primary">{icon}</div>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
