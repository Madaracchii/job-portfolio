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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />

      {/* Home Section */}
      <section id="home" className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-portfolio-dark dark:text-white mb-4">
                Hi, I'm John Doe
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Full-stack developer passionate about creating beautiful and
                functional web applications.
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
                    Master of Computer Science
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stanford University, 2018-2020
                  </p>
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    MIT, 2014-2018
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
                    <li>Express</li>
                    <li>PostgreSQL</li>
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
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Learn more about who I am and what drives my passion for
                  development.
                </p>
              </header>
            </ScrollAnimation>

            <ScrollAnimation delay="short">
              <BentoGridItem title="" className="bg-white dark:bg-gray-800">
                <div className="space-y-4 p-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm a full-stack developer with 5+ years of experience
                    building web applications. I specialize in React, Node.js,
                    and modern JavaScript frameworks. I'm passionate about
                    creating clean, efficient, and user-friendly applications.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    When I'm not coding, you can find me hiking, reading, or
                    experimenting with new technologies. I believe in continuous
                    learning and regularly attend tech conferences and
                    workshops.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
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
