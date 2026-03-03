import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  intensity?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function FloatingElement({
  children,
  intensity = 10,
  duration = 3,
  delay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}