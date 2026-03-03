import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(from + progress * (to - from)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration, isInView]);

  return (
    <motion.span ref={ref} className={className}>
      {count}
      {suffix}
    </motion.span>
  );
}