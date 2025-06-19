import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously enabled
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }

    // Implement proper security headers for CSP
    const meta = document.createElement("meta");
    meta.httpEquiv = "Content-Security-Policy";
    meta.content =
      "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com;";
    document.head.appendChild(meta);

    // Simulate loading time first
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Only start fade-out after loading is complete
    return () => {
      clearTimeout(loadingTimeout);
      // Clean up CSP meta tag when component unmounts
      document.head.removeChild(meta);
    };
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
      className={cn(
        "min-h-screen flex flex-col items-center justify-center",
        "bg-gradient-to-br from-portfolio-light via-white to-gray-100",
        "dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black",
        "p-4 transition-all duration-700 ease-in-out",
        isFadingOut ? "opacity-0 blur-sm" : "opacity-100"
      )}
    >
      {/* Background decoration with animated gradient */}
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-portfolio-secondary dark:bg-portfolio-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-portfolio-primary dark:bg-portfolio-secondary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-portfolio-accent opacity-5 rounded-full blur-3xl animate-pulse"></div>

      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-5xl sm:text-7xl font-bold text-portfolio-dark dark:text-white mb-6 animate-fade-in">
          <span className="text-portfolio-primary">Welcome</span> to my
          Portfolio
        </h1>

        <div className="mb-12 overflow-hidden">
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in-delayed">
            I'm a{" "}
            <span className="font-semibold text-portfolio-secondary">
              passionate developer
            </span>{" "}
            focused on creating{" "}
            <span className="font-semibold text-portfolio-primary">secure</span>{" "}
            and
            <span className="font-semibold text-portfolio-accent">
              {" "}
              beautiful
            </span>{" "}
            applications
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center mt-10">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-primary opacity-20 rounded-full blur-md animate-ping"></div>
              <Loader className="h-16 w-16 text-portfolio-primary animate-spin relative z-10" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-6 font-medium animate-pulse">
              Securing and loading amazing content...
            </p>
          </div>
        ) : (
          <div className="text-portfolio-primary text-lg mt-10 glass-card p-6 rounded-xl backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/20">
            <p className="animate-pulse dark:text-gray-300">
              Preparing a secure experience...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
