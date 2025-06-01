import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BentoGridItemProps {
  title: string;
  description?: string;
  className?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export const BentoGridItem = ({
  title,
  description,
  className,
  icon,
  children,
}: BentoGridItemProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-xl shadow-md transition-all border:dark hover:shadow-lg",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-muted">
            {icon}
          </div>
        )}
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">{children}</CardContent>
    </Card>
  );
};

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return <div className={cn("bento-grid", className)}>{children}</div>;
};
