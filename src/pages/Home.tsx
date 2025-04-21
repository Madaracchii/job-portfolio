import { Book, Code, School } from "lucide-react";
import Navigation from "@/components/Navigation";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";

const Home = () => {
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

  const workExperience = [
    {
      id: 1,
      title: "Google",
      role: "Senior Frontend Engineer",
      date: "2020 - Present",
      description:
        "Lead development of core components for Google Cloud Platform's web console. Improved performance by 40% and implemented key accessibility features.",
    },
    {
      id: 2,
      title: "Facebook",
      role: "Software Engineer",
      date: "2018 - 2020",
      description:
        "Developed and maintained React components for Facebook's Ads Manager. Collaborated with UX designers to implement new features and improve user experience.",
    },
    {
      id: 3,
      title: "Amazon",
      role: "Full Stack Developer",
      date: "2016 - 2018",
      description:
        "Built and maintained microservices for Amazon's internal tools. Worked with AWS Lambda, DynamoDB, and Node.js to create scalable solutions.",
    },
    {
      id: 4,
      title: "Microsoft",
      role: "Junior Developer",
      date: "2014 - 2016",
      description:
        "Started career working on Microsoft's developer tools. Contributed to Visual Studio Code extensions and internal testing frameworks.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Home Section */}
      <section id="home" className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-portfolio-dark mb-4">
            Hi, I'm Andraei Lo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am an aspiring developer.
          </p>
        </header>

        <BentoGrid className="max-w-7xl mx-auto gap-6">
          {/* Overview */}
          <BentoGridItem
            title="About Me"
            className="bento-grid-item bg-white col-span-2 row-span-2"
          >
            <div className="space-y-4">
              <p className="text-gray-600">--------------------------.</p>
              <p className="text-gray-600">------------------</p>
            </div>
          </BentoGridItem>

          {/* Education */}
          <BentoGridItem
            title="Education"
            icon={<School className="h-6 w-6" />}
            className="bento-grid-item bg-white"
          >
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Bachelor of Computer Science</h3>
                <p className="text-sm text-gray-500">LSPU, 2020-2024</p>
              </div>
            </div>
          </BentoGridItem>

          {/* Profile Picture */}
          <BentoGridItem
            title="Andraei Lo"
            description="Front-End Developer"
            className="bento-grid-item bg-white row-span-2"
          >
            <div className="flex justify-center items-center h-full">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-portfolio-primary">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Andraei Lo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BentoGridItem>

          {/* Programming Languages */}
          <BentoGridItem
            title="Skills & Languages"
            icon={<Code className="h-6 w-6" />}
            className="bento-grid-item bg-white col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </BentoGridItem>
        </BentoGrid>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-portfolio-dark mb-4">
              My Projects
            </h2>
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
      </section>

      {/* Work History Section */}
      <section id="work-history" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-portfolio-dark mb-4">
              Work History
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and experience in the technology industry.
            </p>
          </header>

          <div className="relative max-w-5xl mx-auto">
            <Timeline items={workExperience} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
