import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium" | "long";
}

const ScrollAnimation = ({
  children,
  className = "",
  delay = "none",
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const delayClass =
    delay === "short"
      ? "fade-in-scroll-delay-1"
      : delay === "medium"
      ? "fade-in-scroll-delay-2"
      : delay === "long"
      ? "fade-in-scroll-delay-3"
      : "";

  return (
    <div
      ref={elementRef}
      className={`fade-in-scroll ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
