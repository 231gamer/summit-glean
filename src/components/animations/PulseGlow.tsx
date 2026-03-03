import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PulseGlowProps {
  children: ReactNode;
  color?: string;
  intensity?: number;
  duration?: number;
  className?: string;
}

export function PulseGlow({
  children,
  color = "rgba(59, 130, 246, 0.5)",
  intensity = 20,
  duration = 2,
  className = "",
}: PulseGlowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 0 0 ${color}`,
          `0 0 0 ${intensity}px ${color}`,
          `0 0 0 0 ${color}`,
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ willChange: "box-shadow" }}
    >
      {children}
    </motion.div>
  );
}