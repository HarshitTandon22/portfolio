
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  delay = 0
}: TestimonialCardProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`glass p-6 rounded-xl shadow-lg transition-all duration-500 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-primary opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-lg mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
