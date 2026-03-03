import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphingShapeProps {
  children: ReactNode;
  shapes: string[];
  duration?: number;
  className?: string;
}

export function MorphingShape({
  children,
  shapes,
  duration = 4,
  className = "",
}: MorphingShapeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        borderRadius: shapes,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ willChange: "border-radius" }}
    >
      {children}
    </motion.div>
  );
}