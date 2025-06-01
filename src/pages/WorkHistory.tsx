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
