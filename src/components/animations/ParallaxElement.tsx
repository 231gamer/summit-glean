import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ParallaxElement({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [0, -speed * 100] :
    direction === "down" ? [0, speed * 100] :
    direction === "left" ? [0, -speed * 100] :
    [0, speed * 100]
  );

  const transformProperty =
    direction === "left" || direction === "right" ? "translateX" : "translateY";

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        [transformProperty]: transformValue,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}