import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Mail, Github, Linkedin, Phone, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Use email obfuscation to protect from scrapers
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      // Decode the email only when needed
      setEmail("john.doe" + "@" + "example.com");
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => {
        setMounted(false);
        // Clear email when modal closes
        setEmail("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied!",
          description: `${label} copied to clipboard`,
          duration: 2000,
        });
      },
      () => {
        toast({
          title: "Failed to copy",
          description: "Please try again",
          variant: "destructive",
          duration: 2000,
        });
      }
    );
  };

  if (!mounted && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/50 backdrop-blur-sm transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "glass-card max-w-md w-full p-6 transition-all duration-300 transform rounded-xl",
          "bg-white dark:bg-gray-900 shadow-xl",
          isOpen ? "translate-y-0 scale-100" : "translate-y-full scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Shield className="text-portfolio-primary h-6 w-6" />
            <h2 className="text-2xl font-bold text-portfolio-primary dark:text-white">
              Contact Me
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out through any of these secure channels. I'll get
          back to you as soon as possible.
        </p>

        <div className="space-y-4">
          <div
            onClick={() =>
              copyToClipboard(
                "https://linkedin.com/in/yourusername",
                "LinkedIn profile link"
              )
            }
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer hover-scale"
          >
            <div className="bg-[#0077B5] bg-opacity-10 p-3 rounded-full">
              <Linkedin className="h-5 w-5 text-[#0077B5]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                LinkedIn
              </p>
              <p className="font-medium dark:text-white">John Doe</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              Copy
            </Button>
          </div>

          <div
            onClick={() =>
              copyToClipboard(
                "https://github.com/yourusername",
                "GitHub profile link"
              )
            }
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer hover-scale"
          >
            <div className="bg-[#333] bg-opacity-10 p-3 rounded-full dark:bg-white/10">
              <Github className="h-5 w-5 text-[#333] dark:text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
              <p className="font-medium dark:text-white">@johndoe</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              Copy
            </Button>
          </div>

          <div
            onClick={() => copyToClipboard("+1 234 567 8900", "Phone number")}
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer hover-scale"
          >
            <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full">
              <Phone className="h-5 w-5 text-portfolio-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium dark:text-white">+1 234 567 8900</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              Copy
            </Button>
          </div>

          <div
            onClick={() => copyToClipboard(email, "Email address")}
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer hover-scale"
          >
            <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full">
              <Mail className="h-5 w-5 text-portfolio-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium dark:text-white">{email}</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              Copy
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Your data is kept secure and never shared with third parties
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
