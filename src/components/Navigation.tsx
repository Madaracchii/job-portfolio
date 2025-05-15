import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  Shield,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ContactModal from "./ContactModal";
import { toast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously enabled
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
    if (isOpen) setIsOpen(false);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    // Save preference to localStorage
    localStorage.setItem("darkMode", newDarkModeState.toString());

    if (newDarkModeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    toast({
      title: newDarkModeState ? "Dark Mode Activated" : "Light Mode Activated",
      description: "Your preference has been saved",
      duration: 2000,
    });
  };

  const navItems = [
    { name: "Home", id: "home", icon: <Home className="h-4 w-4 mr-2" /> },
    {
      name: "Projects",
      id: "projects",
      icon: <Code className="h-4 w-4 mr-2" />,
    },
    {
      name: "Work History",
      id: "work-history",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <>
      <nav
        className={cn(
          "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-white/0 dark:bg-gray-900/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className={cn(
                  "font-bold text-xl transition-colors duration-300",
                  scrolled
                    ? "text-portfolio-primary dark:text-portfolio-primary"
                    : "text-portfolio-primary dark:text-white"
                )}
              >
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-gradient dark:text-white">
                    Portfolio
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "hover-scale text-gray-600 hover:text-portfolio-primary hover:bg-gray-100/50",
                    "dark:text-gray-200 dark:hover:bg-gray-800/50 dark:hover:text-portfolio-secondary"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}

              <Button
                onClick={toggleContactModal}
                variant="default"
                className={cn(
                  "bg-portfolio-primary hover:bg-portfolio-secondary text-white ml-2",
                  "dark:bg-portfolio-primary/80 dark:hover:bg-portfolio-primary"
                )}
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="ml-2 rounded-full"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-gray-500 dark:text-gray-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={cn(
            "md:hidden dark:bg-gray-900 dark:border-gray-700",
            "transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-64 opacity-100 shadow-lg" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
            <Button
              onClick={toggleContactModal}
              variant="default"
              className="flex w-full items-center justify-start bg-portfolio-primary hover:bg-portfolio-secondary text-white px-3 py-2 dark:bg-portfolio-primary/80 dark:hover:bg-portfolio-primary"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={toggleContactModal} />
    </>
  );
};

export default Navigation;
