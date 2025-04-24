import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Code, Briefcase, Mail } from "lucide-react";
import ContactModal from "./ContactModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="font-bold text-xl text-portfolio-primary"
              >
                Portfolio
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-portfolio-primary hover:bg-gray-100"
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
              <Button
                onClick={toggleContactModal}
                variant="default"
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white ml-2"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex md:hidden items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={cn(
            "md:hidden bg-white shadow-lg",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
            <Button
              onClick={toggleContactModal}
              variant="default"
              className="flex w-full items-center justify-start bg-portfolio-primary hover:bg-portfolio-secondary text-white px-3 py-2"
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
