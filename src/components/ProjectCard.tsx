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
    <div
      className={cn(
        "group relative rounded-[20px] p-[1px] transition-all duration-300",
        "bg-gradient-to-br from-[#00ff75] to-[#3700ff]",
        "hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.30)]",
        className
      )}
    >
      <Card
        className={cn(
          "relative h-full rounded-[20px] bg-white dark:bg-zinc-900",
          "transition-all duration-200 group-hover:scale-[0.98]",
          "overflow-hidden",
          variant === "featured" ? "border-portfolio-primary" : ""
        )}
      >
        {image && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
            {variant === "featured" && (
              <Badge
                variant="secondary"
                className="bg-portfolio-primary text-white"
              >
                Featured
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        {link && (
          <CardFooter className="border-t bg-muted/50 p-3">
            <Button
              asChild
              variant="ghost"
              className="w-full text-sm text-portfolio-primary hover:text-portfolio-secondary hover:bg-muted"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProjectCard;
