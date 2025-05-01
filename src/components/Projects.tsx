
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Full Stack E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with product management, cart functionality, and payment integration using MERN stack.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: '#',
      demoUrl: '#',
      colorClass: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'A full-featured chat platform with real-time messaging, user authentication, and notification system using Socket.io.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: '#',
      demoUrl: '#',
      colorClass: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A Kanban-style project management tool with drag-and-drop tasks, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
      githubUrl: '#',
      demoUrl: '#',
      colorClass: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Blog Content Platform',
      description: 'A full stack blogging platform with markdown support, user authentication, comment system, and content recommendation.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL'],
      githubUrl: '#',
      demoUrl: '#',
      colorClass: 'from-amber-500 to-yellow-500'
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="section-container py-24 relative" ref={elementRef as React.RefObject<HTMLDivElement>}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/5"></div>
        <motion.div 
          className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
          }}
        />
      </div>

      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Full stack applications I've built from front to back.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Button
          variant={filter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            colorClass={project.colorClass}
            index={index}
          />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">No projects found with this technology. Try another filter.</p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
