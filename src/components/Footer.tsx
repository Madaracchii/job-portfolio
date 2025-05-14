import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Projects
                </a>
              </li>
              <li>
                <a
                  href="#work-history"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 hover:bg-portfolio-primary p-2 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-portfolio-primary p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-portfolio-primary p-2 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed with ❤️ and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
