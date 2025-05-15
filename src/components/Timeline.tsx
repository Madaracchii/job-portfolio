import { cn } from "@/lib/utils";
import { Building, Calendar } from "lucide-react";
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
  dateColor?: string;
}

const Timeline = ({
  items,
  className,
  dateColor = "text-portfolio-primary",
}: TimelineProps) => {
  return (
    <div className={cn("relative py-10", className)}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-portfolio-primary via-portfolio-secondary to-portfolio-primary transform -translate-x-1/2 rounded-full"></div>

      {items.map((item, index) => (
        <ScrollAnimation
          key={item.id}
          delay={index % 2 === 0 ? "short" : "medium"}
          className={cn(
            "mb-16 relative",
            index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
          )}
        >
          {/* Timeline node */}
          <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white border-4 border-portfolio-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg"></div>

          {/* Content card */}
          <div
            className={cn(
              "relative grid grid-cols-1 md:grid-cols-2 gap-8",
              index % 2 === 0 ? "md:text-right" : ""
            )}
          >
            {/* Date section - will switch sides */}
            <div
              className={cn(
                "md:px-12 py-4 flex items-center",
                index % 2 === 0
                  ? "md:col-start-1 md:justify-end"
                  : "md:col-start-2"
              )}
            >
              <div className="bg-white shadow-xl rounded-xl p-4 w-full">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Calendar className={`h-5 w-5 ${dateColor}`} />
                  <span className={`font-bold ${dateColor}`}>{item.date}</span>
                </div>
              </div>
            </div>

            {/* Content section - will switch sides */}
            <div
              className={cn(
                "bg-white rounded-xl shadow-xl p-6 transform transition-all hover:scale-[1.02] hover:shadow-2xl md:px-12",
                index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2 mb-2",
                  index % 2 === 0 ? "md:justify-start" : "md:justify-start"
                )}
              >
                <Building className="h-6 w-6 text-portfolio-primary" />
                <h3 className="text-xl font-bold text-portfolio-primary">
                  {item.title}
                </h3>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">
                {item.role}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Timeline;
