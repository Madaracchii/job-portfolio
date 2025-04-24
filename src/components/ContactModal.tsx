import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Mail, Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";

      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-all duration-500",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "bg-white rounded-lg shadow-xl max-w-md w-full p-6 transition-all duration-500 transform",
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-portfolio-dark">Contact Me</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        <div className="space-y-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50"
          >
            <div className="bg-[#0077B5] bg-opacity-10 p-3 rounded-full">
              <Linkedin className="h-5 w-5 text-[#0077B5]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="font-medium">John Doe</p>
            </div>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50"
          >
            <div className="bg-[#333] bg-opacity-10 p-3 rounded-full">
              <Github className="h-5 w-5 text-[#333]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="font-medium">@johndoe</p>
            </div>
          </a>
          <div className="flex items-center space-x-3 p-3 rounded-lg">
            <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full">
              <Mail className="h-5 w-5 text-portfolio-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
