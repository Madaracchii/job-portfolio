import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect after a delay (optional)
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-portfolio-dark mb-6 animate-fade-in">
          Hi, Welcome to my Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed">
          I'm a passionate developer showcasing my projects and experience
        </p>
        <Button
          onClick={() => navigate("/home")}
          className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-8 py-2 rounded-full text-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-delayed"
        >
          Enter Portfolio
        </Button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-portfolio-secondary opacity-5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Index;
