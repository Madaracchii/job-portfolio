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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  className?: string;
  variant?: "default" | "featured";
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  className,
  variant = "default",
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-lg",
        variant === "featured" ? "border-portfolio-primary" : "",
        className
      )}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all hover:scale-105 duration-500"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {variant === "featured" && (
            <Badge
              variant="secondary"
              className="bg-portfolio-primary text-white"
            >
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-muted text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter className="border-t bg-muted/50 px-6 py-4">
          <Button
            asChild
            variant="ghost"
            className="text-portfolio-primary hover:text-portfolio-secondary hover:bg-muted"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
