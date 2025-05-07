import Navigation from "@/components/Navigation";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const WorkHistory = () => {
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
      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-portfolio-dark mb-4">
            Work History
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and experience in the technology industry.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <Timeline
            items={workExperience}
            dateColor="text-portfolio-secondary font-bold"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkHistory;
