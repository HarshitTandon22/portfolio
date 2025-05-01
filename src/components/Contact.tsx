
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter, Mail, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('harshittandon94@gmail.com');
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
  ];

  return (
    <section 
      id="contact" 
      className="section-container"
      ref={elementRef as React.RefObject<HTMLDivElement>}
    >
      <div className={`text-center mb-12 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className={`${isIntersecting ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to discuss a project..."
                required
                rows={5}
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        <div className={`${isIntersecting ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>harshittandon94@gmail.com</span>
                <button onClick={copyEmail} className="p-1 hover:bg-secondary rounded-full" title="Copy email">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg mt-8">
              <h4 className="font-semibold mb-2">Open to Opportunities</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I'm currently available for freelance projects and full-time positions.
                If you have a challenging full stack development project, let's discuss how I can help!
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.open('resume.pdf')}>
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
