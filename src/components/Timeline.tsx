import { cn } from "@/lib/utils";
import ScrollAnimation from "./ScrollAnimation";

export interface TimelineItem {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <div className={cn("timeline-container py-10", className)}>
      {items.map((item, index) => (
        <ScrollAnimation
          key={item.id}
          delay={index % 2 === 0 ? "short" : "medium"}
          className={cn(
            "timeline-item mb-8",
            index % 2 === 0
              ? "timeline-left animate-slide-in-left"
              : "timeline-right animate-slide-in-right"
          )}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-portfolio-primary">
              {item.title}
            </h3>
            <h4 className="text-lg font-medium text-gray-700">{item.role}</h4>
            <div className="text-sm text-gray-500 mb-3">{item.date}</div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Timeline;
