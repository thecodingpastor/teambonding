"use client";

import React, { useEffect, useRef, ReactNode, CSSProperties } from "react";

type AnimationType = "fade" | "slide" | "zoom" | "slideLeft" | "slideRight";

interface AnimatedInViewProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  threshold?: number;
}

const animationStyles: Record<AnimationType, CSSProperties> = {
  fade: {
    transition: "opacity 400ms ease-in-out",
    opacity: 0,
  },
  slide: {
    transition: "transform 400ms ease-in-out",
    transform: "translateY(100px)",
  },
  slideLeft: {
    transition: "transform 400ms ease-in-out",
    transform: "translateX(100px)",
  },
  slideRight: {
    transition: "transform 400ms ease-in-out",
    transform: "translateX(-100px)",
  },
  zoom: {
    transition: "transform 400ms ease-in-out",
    transform: "scale(0.9)",
  },
};

const AnimatedInView: React.FC<AnimatedInViewProps> = ({
  children,
  animation = "zoom",
  duration = 0.3,
  threshold = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            switch (animation) {
              case "fade":
                target.style.opacity = "1";
                break;
              case "slide":
                target.style.transform = "translateY(0)";
                break;
              case "slideLeft":
                target.style.transform = "translateX(0)";
                break;
              case "slideRight":
                target.style.transform = "translateX(0)";
                break;
              case "zoom":
                target.style.transform = "scale(1)";
                break;
              default:
                break;
            }
          } else {
            switch (animation) {
              case "fade":
                target.style.opacity = "0";
                break;
              case "slide":
                target.style.transform = "translateY(100px)";
                break;
              case "zoom":
                target.style.transform = "scale(0.5)";
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [animation, threshold]);

  return (
    <div
      ref={ref}
      style={{
        ...animationStyles[animation],
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedInView;
