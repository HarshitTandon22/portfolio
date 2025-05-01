
import { useState } from 'react';
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
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'A full-featured chat platform with real-time messaging, user authentication, and notification system using Socket.io.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A Kanban-style project management tool with drag-and-drop tasks, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 4,
      title: 'Blog Content Platform',
      description: 'A full stack blogging platform with markdown support, user authentication, comment system, and content recommendation.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL'],
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="section-container" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className={`text-center mb-12 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Full stack applications I've built from front to back.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
