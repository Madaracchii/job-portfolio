import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading time first
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Only start fade-out after loading is complete
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Handle transition to home page after loading and animation
  useEffect(() => {
    if (!isLoading) {
      // Start the fade-out animation
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 1000);

      // Navigate after fade-out completes
      const navigationTimeout = setTimeout(() => {
        navigate("/home");
      }, 1500); // This should be longer than the CSS transition time

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(navigationTimeout);
      };
    }
  }, [isLoading, navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4 transition-opacity duration-500 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-portfolio-dark mb-6 animate-fade-in">
          Hi, Welcome to my Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in-delayed">
          I'm a passionate developer showcasing my projects and experience
        </p>
        {isLoading ? (
          <div className="flex flex-col items-center animate-pulse">
            <Loader className="h-12 w-12 text-portfolio-primary animate-spin" />
            <p className="text-gray-500 mt-4">Loading amazing content...</p>
          </div>
        ) : (
          <div className="text-portfolio-primary text-lg">
            <p className="animate-pulse">Preparing your experience...</p>
          </div>
        )}
      </div>
      {/* Background decoration with animated gradient */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-portfolio-secondary opacity-5 rounded-full blur-3xl animate-pulse"></div>{" "}
    </div>
  );
};

export default Index;
