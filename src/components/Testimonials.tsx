
import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const testimonials = [
    {
      quote: "John is an exceptional web developer with a keen eye for design. His work on our e-commerce platform significantly improved user engagement and conversion rates.",
      author: "Sarah Johnson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Working with John was a pleasure. He understands business needs and translates them into elegant, functional web solutions that exceed expectations.",
      author: "Michael Chen",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "John's technical expertise and problem-solving abilities are outstanding. He revamped our entire website, making it faster, more secure, and visually stunning.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials every 8 seconds
  useEffect(() => {
    if (!isIntersecting) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isIntersecting]);

  // Calculate visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        // Show all on large screens
        return testimonials;
      } else if (window.innerWidth >= 640) {
        // Show 2 on medium screens
        return [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length],
        ];
      }
    }
    // Show only 1 on small screens
    return [testimonials[currentIndex]];
  };

  return (
    <section 
      id="testimonials" 
      className="section-container relative bg-primary/5 py-20 dark:bg-primary/10"
      ref={elementRef as React.RefObject<HTMLDivElement>}
    >
      <div className={`text-center mb-12 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          What people are saying about my work and collaboration.
        </p>
      </div>

      <div className={`relative ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "default" : "outline"}
              size="icon"
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? "bg-primary" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
