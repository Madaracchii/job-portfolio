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
      title: "AI Human Emotion Recognition",
      description:
        "An AI model capable of detecting 7 basic human emotions using EfnetB0 as the base model and YOLOv5 as the face detection tool.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      tags: ["Python"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations using a third-party weather API.",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "API Integration", "TailwindCSS"],
      link: "#",
    },
  ];

  const workExperience = [
    {
      id: 1,
      title: "Foundever",
      role: "Technical Agent Specialist",
      date: "2020 - Present",
      description: "Descrition to be edited",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />

      {/* Home Section */}
      <section id="home" className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-portfolio-dark dark:text-white mb-4">
                Hi, I'm Andraei!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Aspiring developer that focuses on turning ideas into code.
              </p>
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-portfolio-primary dark:border-portfolio-secondary shrink-0">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Education and Skills side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ScrollAnimation delay="medium">
            <BentoGridItem
              title="Education"
              icon={<School className="h-6 w-6" />}
              className="bg-white dark:bg-gray-800 h-full"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium dark:text-white">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Laguna State Polytechnic University - Main Campus, 2020-2024
                  </p>
                </div>
              </div>
            </BentoGridItem>
          </ScrollAnimation>

          <ScrollAnimation delay="long">
            <BentoGridItem
              title="Skills & Languages"
              icon={<Code className="h-6 w-6" />}
              className="bg-white dark:bg-gray-800 h-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">Frontend</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 dark:text-white">Backend</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </BentoGridItem>
          </ScrollAnimation>
        </div>

        {/* About Me Section - Moved right after Education and Skills */}
        <section id="about-me" className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <header className="text-center mb-12">
                <h2 className="text-4xl font-bold text-portfolio-dark dark:text-white mb-4">
                  About Me
                </h2>
              </header>
            </ScrollAnimation>
            <ScrollAnimation delay="short">
              <BentoGridItem title="" className="bg-white dark:bg-gray-800">
                <div className="space-y-4 p-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Coming Soon
                  </p>
                </div>
              </BentoGridItem>
            </ScrollAnimation>
          </div>
        </section>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-portfolio-dark dark:text-white mb-4">
                My Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
      <section id="work-history" className="py-20 px-4 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-portfolio-dark dark:text-white mb-4">
                Work History
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
