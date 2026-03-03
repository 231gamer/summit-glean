import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleOnHover?: number;
  glowOnFocus?: boolean;
  onClick?: () => void;
}

export function InteractiveCard({
  children,
  className = "",
  tiltIntensity = 0.1,
  scaleOnHover = 1.02,
  glowOnFocus = true,
  onClick,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity * 15, -tiltIntensity * 15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity * 15, tiltIntensity * 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: scaleOnHover,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      whileFocus={
        glowOnFocus
          ? {
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
              transition: { duration: 0.2 },
            }
          : undefined
      }
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
    >
      <motion.div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}