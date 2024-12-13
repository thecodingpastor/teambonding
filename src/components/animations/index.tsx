"use client";

import React, { useEffect, useRef, ReactNode } from "react";

type AnimationType = "fade" | "slide" | "zoom";

interface AnimatedInViewProps {
  children: ReactNode;
  duration?: number;
  opacity?: number;
  scale?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  x?: number; // Starting X position
  y?: number; // Starting Y position
  repeat?: boolean; // Optional feature to animate multiple times
}

const AnimatedInView: React.FC<AnimatedInViewProps> = ({
  children,
  className = "",
  duration = 0.3,
  delay = 0,
  threshold = 0.3,
  opacity = 1,
  scale = 1,
  x = 0,
  y = 0,
  repeat = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false); // Track if animation has occurred

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (!repeat && hasAnimated.current) return;

            target.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;
            target.style.transitionDelay = `${delay}s`;
            target.style.transform = "translate(0, 0) scale(1)";
            target.style.opacity = "1";

            hasAnimated.current = true; // Mark as animated
          } else if (repeat) {
            // Reset styles when element leaves viewport if repeat is true
            target.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            target.style.opacity = `${opacity}`;
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [duration, delay, threshold, x, y, opacity, scale, repeat]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        opacity: opacity,
        transition: `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedInView;
