import { useEffect, useState } from "react";

// Animation configuration constants
export const animationConfig = {
  fast: { duration: 0.3, ease: "easeOut" },
  medium: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  slow: { duration: 0.8, ease: "easeInOut" },
  spring: { type: "spring" as const, stiffness: 300, damping: 25 },
} as const;

export const scrollSettings = {
  once: true,
  amount: 0.3,
  margin: "-50px",
} as const;

// Hook to check for reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

// Utility function to get animation props based on reduced motion preference
export function getAnimationProps(
  prefersReducedMotion: boolean,
  animationProps: any
) {
  if (prefersReducedMotion) {
    // Return minimal animation for reduced motion
    return {
      ...animationProps,
      transition: {
        duration: 0.2,
        ease: "linear",
      },
    };
  }

  return animationProps;
}