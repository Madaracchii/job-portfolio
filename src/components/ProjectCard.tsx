import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Eye } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  githubLink?: string;
  className?: string;
  variant?: "default" | "featured";
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  githubLink,
  className,
  variant = "default",
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-[20px] p-[1px] transition-all duration-300 h-full",
        variant === "featured"
          ? "bg-gradient-to-br from-portfolio-primary via-portfolio-secondary to-portfolio-accent"
          : "bg-white dark:bg-gray-800",
        className
      )}
    >
      <Card
        className={cn(
          "relative h-full rounded-[19px] overflow-hidden",
          "transition-all duration-300 group-hover:scale-[0.98]",
          "bg-white dark:bg-gray-800 border-none",
          "group-hover:shadow-xl"
        )}
      >
        {image && (
          <div className="relative">
            <AspectRatio
              ratio={16 / 9}
              className="w-full overflow-hidden bg-gray-100 dark:bg-gray-900"
            >
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-portfolio-dark dark:text-white group-hover:text-portfolio-primary transition-colors duration-300">
              {title}
            </CardTitle>
            {variant === "featured" && (
              <Badge
                variant="secondary"
                className="bg-portfolio-primary text-white dark:bg-portfolio-primary/80"
              >
                Featured
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2 text-sm text-muted-foreground dark:text-gray-300">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {(link || githubLink) && (
          <CardFooter className="border-t bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700 p-3 gap-2 flex">
            {link && (
              <Button
                asChild
                variant="ghost"
                className="w-full text-sm text-portfolio-primary hover:text-portfolio-secondary hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} project`}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}

            {githubLink && (
              <Button
                asChild
                variant="ghost"
                className="w-full text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProjectCard;
