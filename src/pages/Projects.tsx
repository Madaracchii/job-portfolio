import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product listing, cart management, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A Trello-like task management application with drag-and-drop functionality, task assignments, due dates, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations using a third-party weather API.",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "API Integration", "CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase projects and skills.",
      image:
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      link: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A full-featured blog platform with a rich text editor, image uploads, comments, and user authentication.",
      tags: ["Next.js", "PostgreSQL", "AWS S3"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-portfolio-dark mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each demonstrates
            different skills and technologies.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
              variant={project.featured ? "featured" : "default"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
