import { Book, Code, School } from "lucide-react";
import Navigation from "@/components/Navigation";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import ScrollAnimation from "@/components/ScrollAnimation";
import Footer from "@/components/Footer";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Emotion Recognition using Computer Vision (EfnetB0)",
      description:
        "AI model that runs with EfficientNet B0 model that can detect 7 basic human emotions.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      tags: ["Python"],
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
  ];

  const workExperience = [
    {
      id: 1,
      title: "Foundever",
      role: "Technical Agent Specialist",
      date: "2024 - Present",
      description: "--------------",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section id="home" className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-portfolio-dark mb-4">
                Hi, I'm John Doe
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Full-stack developer passionate about creating beautiful and
                functional web applications.
              </p>
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-portfolio-primary shrink-0">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ScrollAnimation delay="medium">
            <BentoGridItem
              title="Education"
              icon={<School className="h-6 w-6" />}
              className="bg-white h-full"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium">Master of Computer Science</h3>
                  <p className="text-sm text-gray-500">
                    Stanford University, 2018-2020
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Bachelor of Computer Science</h3>
                  <p className="text-sm text-gray-500">MIT, 2014-2018</p>
                </div>
              </div>
            </BentoGridItem>
          </ScrollAnimation>

          <ScrollAnimation delay="long">
            <BentoGridItem
              title="Skills & Languages"
              icon={<Code className="h-6 w-6" />}
              className="bg-white h-full"
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
          </ScrollAnimation>
        </div>

        <section id="about-me" className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation delay="short">
              <BentoGridItem title="" className="bg-white">
                <div className="space-y-4 p-2">
                  <h2 className="text-4xl font-bold text-portfolio-dark mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-600">
                    I'm a full-stack developer with 5+ years of experience
                    building web applications. I specialize in React, Node.js,
                    and modern JavaScript frameworks. I'm passionate about
                    creating clean, efficient, and user-friendly applications.
                  </p>
                  <p className="text-gray-600">
                    When I'm not coding, you can find me hiking, reading, or
                    experimenting with new technologies. I believe in continuous
                    learning and regularly attend tech conferences and
                    workshops.
                  </p>
                  <p className="text-gray-600">
                    My approach to development focuses on writing maintainable
                    code, adhering to best practices, and staying updated with
                    the latest industry trends. I enjoy collaborating with teams
                    to solve complex problems and deliver exceptional user
                    experiences.
                  </p>
                </div>
              </BentoGridItem>
            </ScrollAnimation>
          </div>
        </section>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-portfolio-dark mb-4">
                My Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Here's a selection of projects I've worked on. Each demonstrates
                different skills and technologies.
              </p>
            </header>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollAnimation
                key={project.id}
                delay={
                  index % 3 === 0
                    ? "none"
                    : index % 3 === 1
                    ? "short"
                    : "medium"
                }
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  variant={project.featured ? "featured" : "default"}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section id="work-history" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-portfolio-dark mb-4">
                Work History
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                My professional journey and experience in the technology
                industry.
              </p>
            </header>
          </ScrollAnimation>
          <div className="relative max-w-5xl mx-auto">
            <Timeline items={workExperience} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
